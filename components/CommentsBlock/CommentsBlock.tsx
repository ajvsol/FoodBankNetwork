import { Card } from "flowbite-react";

export default function CommentsBlock({data}: any) {
  return (
    <>
      <h1 className="ml-3 text-gray-900 text-xl p-2 dark:text-gray-300">
        Comments
      </h1>
      <div className="ml-3 text-gray-900 dark:text-gray-300">
        {data.map((element: any, index: any) => {
          return (
            <Card key={index} className="">
              <h5 className="text-l font-bold tracking-tight text-gray-900 dark:text-white">
                {element.name}
              </h5>
              <p className="font-light text-gray-900 dark:text-gray-300">
                {element.author}
              </p>
              <p className="font-light text-gray-900 dark:text-gray-300">
                {element.comment}
              </p>
            </Card>
          );
        })}
      </div>
    </>
  );
}