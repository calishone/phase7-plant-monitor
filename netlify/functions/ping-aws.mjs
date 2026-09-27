export default async (req) => {
  const AWS_API_URL = "https://s3zwwf5syi.execute-api.ap-northeast-1.amazonaws.com/agent-query";

  const awsResponse = await fetch(AWS_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question: "ネジAの在庫はどう？" })
  });

  const data = await awsResponse.json();

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" }
  });
};
