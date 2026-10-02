import express from 'express';
import cors from 'cors'
import pg from 'pg'
import dotenv from "dotenv";
import bcrypt from 'bcrypt'
dotenv.config();
const app = express()
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())

const db = new pg.Client({
  user:process.env.DATABASE_USER,
  host:process.env.DATABASE_HOST,
  database:process.env.DATABASE_NAME,
  password:process.env.DATABASE_PASS,
  port:5432
})

const port = 3000

db.connect()

let currentDeals: any[] = [];
let dealsExpireAt = 0;

const DEAL_DURATION = 24 * 60 * 60 * 1000;
const saltRounds = 10;
// app.get('products',async(req,res)=>{

// })

app.get('/RefreshDeals',async (req,res)=>{
    const discountPercent = 60;
   try{

      const now = Date.now();

        // Still within the 24-hour period
        if (currentDeals.length > 0 && now < dealsExpireAt) {
            return res.status(200).json({
                product: currentDeals,
                expiresAt: dealsExpireAt,
            });
        }
       const deal = await db.query(`
        SELECT 
            product_id,
            title,
            description,
            price,
            image_url,
            product_type,
            $1::numeric AS discount_percent,
            ROUND(price * (1 - $1::numeric / 100), 2) AS discounted_price
        FROM products
        ORDER BY RANDOM()
        LIMIT 2
                            `,[discountPercent])
        currentDeals = deal.rows;
        dealsExpireAt = now + DEAL_DURATION;
        console.log("New deals generated:", currentDeals);
        res.status(200).json({product:currentDeals,expiresAt: dealsExpireAt})
   }catch(err){
        console.log(err)
        res.status(500).json({message:'Failed to fetch Deals'})
   }
})


app.post('/register',async(req,res)=>{
    const {firstName,lastName,email,mobile,password} = req.body;
    try{
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const data = await db.query('SELECT * FROM users WHERE email = $1',[email])
        if(data.rows.length>0){
            return res.status(400).json({message:'User already exists'})
        }
        const result = await db.query(`
            INSERT INTO users (first_name, last_name, email, mobile_number, password_hashed)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id, first_name, last_name, email
        `,[firstName,lastName,email,mobile,hashedPassword])
        res.status(201).json({user:result.rows[0]})
    }catch(err){
        console.log(err)
        res.status(500).json({message:'Failed to register user'})
    }
})

app.post('/login',async(req,res)=>{
    const {email,password} = req.body;
    try{
        const data = await db.query('SELECT * FROM users WHERE email = $1',[email])
        if(data.rows.length===0){
            return res.status(400).json({message:'Invalid credentials'})
        }
        const user = data.rows[0];
        const isMatch = await bcrypt.compare(password, user.password_hashed);
        if(!isMatch){
            return res.status(400).json({message:'Invalid credentials'})
        }
        res.status(200).json({user:{id:user.id, firstName:user.first_name, lastName:user.last_name, email:user.email}})
    }catch(err){
        console.log(err)
        res.status(500).json({message:'Failed to login user'})
    }
})
app.listen(port,()=>{
    console.log("Listing in Port:"+ port)
})