interface ProjectPreview {
  img: string;
  name: string;
  desc: string;
  pLink: string;
}

export default function ProjPreviewCard({img, name, desc, pLink} : ProjectPreview) {
    return (
    <a href={pLink} rel="noopener noreferrer" className="flex group flex-col justify-between box-border border-2 border-black px-10 py-3 h-full hover:outline-2 hover:outline-black transition-all duration-50">
        
        <img src={img} alt="illustration du projet" />
        
        <h3 className="text-4xl font-bold font-archivo mt-4">{name}</h3>
        <p className="text-gray-600 mt-1">{desc}</p>
    </a>
    );
}