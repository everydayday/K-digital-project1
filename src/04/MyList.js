import { FcLike } from "react-icons/fc";

export default function MyList({ title, imgUrl, content }) {
  return (
    <div className="w-full flex  border-black  border rounded hover:bg-orange-100">
      <div className="w-2/5">
        <img className="rounded-md" src={imgUrl} alt="html" />
      </div>
      <div className=" w-3/5 m-1 h-full flex flex-col justify-between px-1 py-1">
        <h1 className="font-bold text-xl text-gray-700">{title}</h1>
        <p>{content}</p>
        <p className="w-full flex flex-row  justify-end items-end mt-5 font-bold">
          <span className=" text-base">💗</span>
          <span className="mx-2">좋아요</span>
        </p>
      </div>

      {/* <div className="flex flex-row justify-end">
        <FcLike />
        <p className="ml-1 font-semibold text-xl">좋아요 0</p>
      </div> */}
    </div>
  );
}
