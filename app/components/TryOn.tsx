import Image from "next/image"
export default function Try(
  {
    name,
    Desrcription,
    Price,
    ImageSrc
  }:
  {
    name:string,
    Desrcription:string,
    Price:string,
    ImageSrc:string
  }
){
  return <div className="w-full flex flex-col overflow-hidden bg-white rounded-[1.39em] pb-[1em]">
       <Image className=" w-full object-center object-cover" width={400} height={100} alt="cuban1" src={ImageSrc} />
       <div className="px-[1em] py-[1.3em]">
        <p>{name}</p>
        <p className="text-wrap">{Desrcription}</p>
       <div className="flex items-center justify-between">
        <p>{Price}</p>
        <p className="bg-[#eaedf6] rounded-full px-[1em] py-[.7em]">Try on</p>
      </div>
       </div>
  </div>
}
