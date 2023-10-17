import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { preview } from "../asets";
import { getRandomPrompt } from "../utils";
import { Loader, FormField } from "../components";

const CreatePost = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [prompt, setPrompt] = useState("");
  const [img, setImg] = useState("");
  const [generateImg, setGenerateImg] = useState(false);
  const [loading, setLoading] = useState(false);

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
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">
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
            placeholder="a macro 35mm photograph of two mice in Hawaii, they're each wearing tiny swimsuits and are carrying tiny surf boards, digital art"
            value={prompt}
            handleChange={handleChange}
            isSurprise
            handleSurpriseMe={handleSurpriseMe}
          />
          <FormField
            labelName="Image"
            type="text"
            name="Image"
            value={img}
            handleChange={handleChange}
          />
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
