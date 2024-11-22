import BackButton from "../../components/BackButton";

const CreatePlanLayout = ({ title, children }) => {
  return (
    <div className="bg-white">
      <BackButton />
      <div className="absolute left-[7%] top-[20%] md:left-[30%] md:top-14 lg:left-[40%]  mx-auto p-10 border border-accent bg-background rounded-lg">
        <h1 className="w-full text-center pb-10 font-bold text-primaryColor">
          <span className="border-b-2 border-accent">
            {title.replace("-", "")}
          </span>
        </h1>
        <div className="flex flex-col items-start gap-10">{children}</div>
      </div>
    </div>
  );
};

export default CreatePlanLayout;
