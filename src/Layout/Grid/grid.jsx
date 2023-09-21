
function Grid( { tag, image , des} ) {
    return (
        <div className="flex gap-[20px] items-center px-[20px] py-[20px]  h-full">
            < div className="w-[200px] h-[200px]" >
                <img className="w-full   object-cover h-full rounded-xl shadow-md" src={image} alt="" />
            </div >

            <div className="">
                <h1 className="font-bold text-center">{tag}</h1>
                <p className="text-[14px] text-center">{des}</p>
            </div>
        </div>
    )
}
export default Grid;
