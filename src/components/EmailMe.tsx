import { useEffect, useState } from "react";

export default function EmailMe() {
  const email = "reydelocon.dev@gmail.com";

  const [isCopied, setIsCopied] = useState(false);
  const handleCopyText = () => {
    navigator.clipboard.writeText(email);

    setIsCopied(true);
  };

  useEffect(() => {
    // console.log("isCopied", isCopied);
    setTimeout(() => {
      setIsCopied(false);
    }, 4000);
  }, [isCopied]);

  return (
    <div className="h-[250px] w-full md:w-[80%] lg:w-[50%] bg-primary-color my-[5rem] flex justify-center items-center flex-col">
      <h1 className="text-white text-xl font-bold mb-2">Contact Me.</h1>
      <span className="text-white text-xl border-b-4 border-white">
        {email}
      </span>

      <div className="flex gap-2 p-4">
        <button
          onClick={handleCopyText}
          className="bg-white p-2 w-[10rem] rounded-md font-semibold hover:bg-primary-color hover:border-2 hover:border-white hover:text-white"
        >
          Copy
        </button>
        <a
          className="bg-white p-2 w-[10rem] rounded-md font-semibold no-underline text-center hover:bg-primary-color hover:border-2 hover:border-white hover:text-white"
          href="mailto:reydelocon.dev@gmail.com"
        >
          Send Email
        </a>
      </div>
      <div>
        {isCopied && (
          <span className="text-white">Email copied to clipboard</span>
        )}
      </div>
    </div>
  );
}
