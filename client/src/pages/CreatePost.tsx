import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { Loader, FormField } from "../components";

const CreatePost = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [prompt, setPrompt] = useState("");
  const [img, setImg] = useState("");
  const [generateImg, setGenerateImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateImage = () => {};
  const handleSubmit = () => {};
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "prompt":
        setPrompt(e.target.value);
        break;
      default:
        break;
    }
  };
  const handleSurpriseMe = () => {
    // e.preverntDefault();
    const randomPrompt = getRandomPrompt(prompt);
    setPrompt(randomPrompt);
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[theme(colors.textSecondary)] text-[16px] max-w-[500px]">
          Create Imaginative and AI generated images using openAI and Dall-e
        </p>
      </div>
      <form action="" className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your name"
            type="text"
            name="name"
            placeholder="your name.."
            value={name}
            handleChange={handleChange}
          />
          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="a macro 35mm photograph of two mice in Hawaii"
            value={prompt}
            handleChange={handleChange}
            isSurprise
            handleSurpriseMe={handleSurpriseMe}
          />
          <div className="relative w-64 p-3 h-64 flex justify-center items-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[theme(colors.primaryOrange)] focus:border-[theme(colors.primaryOrange)] ">
            {img ? (
              <img
                src={img}
                alt={prompt}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="w-full h-full object-contain opacity-40"
              />
            )}
            {generateImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-5 mt-5">
          <button
            type="button"
            onClick={generateImage}
            className="text-white bg-green-500 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {generateImg ? "Generating.." : "Generate"}
          </button>
        </div>
        <div className="mt-10">
          <p className="my-2 text-[theme(colors.textSecondary)] text-sm">
            Once you have created an image, you can share it with others in the
            community
          </p>
          <button
            className="my-3 text-white bg-[theme(colors.primaryOrange)] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            type="submit"
          >
            {loading ? "Sharing" : "Share with the community"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
