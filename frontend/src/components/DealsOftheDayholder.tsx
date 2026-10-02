type Deals={
    sourceImg:string
    altimg:string,
    title:string,
    OriginalPrice:number,
    discountedPrice:number
}

const formatPrice = (price: number) => price.toLocaleString("en-PH");

export function DealsofTheDay({sourceImg,altimg,title,OriginalPrice,discountedPrice}:Deals){
    return<>
        <div className="flex gap-2 max-md:grid max-md:grid-cols-1 cursor-pointer 
                        hover:scale-105 rounded-2xl mx-5 hover:shadow-2xl
                        p-1 transition-all duration-600 
                        hover:bg-white
                        ">
            <div className="col-span-3 flex items-center justify-center">
                <img className="max-h-72  " src={sourceImg} alt={altimg} />
            </div>
            <div className="flex flex-col justify-center col-span-1 max-md:items-center">
                <p className="text-2xl font-bold max-sm:text-sm">{title}</p>
                <p className="text-sm"><span className="text-gray-400 text-xs">₱{formatPrice(OriginalPrice)}</span> ₱{formatPrice(discountedPrice)}</p>
            </div>
        </div>
    </>

}
