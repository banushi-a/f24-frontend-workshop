type BirdPreviewProps = {
  title: string;
  description: string;
  imageSrc: string;
};

const BirdPreview = ({
  title,
  description,
  imageSrc,
}: BirdPreviewProps): JSX.Element => {
  return (
    <div className="flex bg-yellow-100 p-8 m-2 rounded text-black">
      <img
        className="rounded border-8 border-yellow-300"
        src={imageSrc}
        width={144}
        height={144}
        alt="bird image"
      />
      <div className="ml-4 w-72 flex flex-col justify-between">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{description}</p>
        <div className="text-right">
          <button>0 👍</button> {/* TODO */}
        </div>
      </div>
    </div>
  );
};

export default BirdPreview;
