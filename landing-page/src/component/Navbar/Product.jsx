function Product({img,theme,name,cost,processor}){
    const textColor = theme == "dark" ? "text-black" : "text-white";
    const highlight = theme == "dark" ? "text-emerald-800" : "text-emerald-300";
    const bordercolor = theme == "dark" ? "border-gray-400" : "border-gray-800";
    return (
        <>
        <div className={`${textColor} ${bordercolor} border-x border-b rounded-xl mt-2`}>
            <img src={img} className="grow w-150 h-90 rounded-lg" alt=""/>
            <div className="p-2">
                <h1 className="font-bold text-xl md:text-2xl">{name}</h1>
                <p className="font-mono text-lg md:text-2xl">{cost}</p>
                <p className="font-mono text-lg md:text-2xl">{processor}</p>
            </div>
        </div>
        
        </>
    );
}
export default Product;
