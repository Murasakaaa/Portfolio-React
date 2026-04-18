interface ProjectImageGalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export default function ProjectImageGallery({ images }: ProjectImageGalleryProps) {
  return (
    <div className="flex flex-col flex-1 gap-2 w-full">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className="w-full object-cover"
        />
      ))}
    </div>
  );
}
