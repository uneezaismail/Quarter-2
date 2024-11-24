import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  
  const PostCard = ({ body, title }: { body: string; title: string }) => {
    return (
      <Card className="rounded-lg border-2 border-l-8 p-6 border-teal-700 shadow-lg hover:shadow-2xl bg-white transition-transform transform hover:-translate-y-2  hover:border-gray-300">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-800 ">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-lg text-gray-600 mt-2 leading-relaxed">
            {body}
          </CardDescription>
        </CardContent>
      </Card>
    );
  };
  
  export default PostCard;
  