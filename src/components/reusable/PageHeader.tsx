export default function PageHeader({ title }: { title: string }) {
  return (
    <div className="py-4 w-full text-start mb-[2rem]">
      <h1 className="font-bold text-[2rem] bg-primary-color p-2 w-fit text-white rounded-sm">
        {title}.
      </h1>
    </div>
  );
}
