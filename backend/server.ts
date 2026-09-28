import express from 'express';
import cors from 'cors'
import pg from 'pg'
import dotenv from "dotenv";

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

app.listen(port,()=>{
    console.log("Listing in Port:"+ port)
})