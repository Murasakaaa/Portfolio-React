interface ProjectPreview {
  img: string;
  name: string;
  desc: string;
  pLink: string;
}

export default function ProjPreviewCard({img, name, desc, pLink}:ProjectPreview) {
    return (
        <>
        {img} {name} {desc} {pLink}
        </>
    );
}