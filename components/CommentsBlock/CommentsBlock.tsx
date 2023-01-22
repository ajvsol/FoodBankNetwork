import { Card, Label, Textarea } from "flowbite-react";

export default function CommentsBlock({data}: any) {
  return (
    <>
      <h1 className=" text-gray-900 text-xl p-2 dark:text-gray-300">
        Comments
      </h1>

      <div id="textarea">
        <div className="mb-2 block">
          <Label
            htmlFor="comment"
            value="Your message"
          />
        </div>
        <Textarea
          id="comment"
          placeholder="Leave a comment..."
          required={true}
          rows={4}
        />
      </div>
      <div className="text-gray-900 dark:text-gray-300 space-y-1">
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