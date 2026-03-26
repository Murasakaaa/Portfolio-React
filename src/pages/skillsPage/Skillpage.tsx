import { Link } from "react-router-dom";
import Tag from "../../components/shared/tags";

interface Competence {
  id: string;
  title: string;
  description: string;
  practice: string;
  projectLink?: string;
  projectLabel?: string;
}

interface SkillData {
  title: string;
  intro: string;
  situationsPro: string[];
  techSkills: string[];
  methodSkills: string[];
  competences: Competence[];
}

interface SkillPageProps {
  skillData: SkillData;
}

export default function SkillPage({ skillData }: SkillPageProps) {
  return (
    <main className="font-archivo min-h-screen bg-white text-black mx-60 mt-10 max-sm:mx-8">
      {/* ── Header ── */}
      <section className="border-b-2 border-black py-10">
        <h1 className="font-schabo text-9xl uppercase select-none max-sm:text-7xl">
          → {skillData.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base text-gray-600 leading-relaxed">
          {skillData.intro}
        </p>
      </section>

      {/* ── Infos (situations + savoir-faire) ── */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b-2 border-black">
        {/* Situations pro */}
        <div className="border-b-2 md:border-b-0 md:border-r-2 border-black px-8 py-8 md:px-16">
          <h2 className="text-xl font-archivo uppercase font-bold mb-4">
            Mises en situation pro
          </h2>
          <ul className="space-y-2">
            {skillData.situationsPro.map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className="mt-1 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Savoir-faire */}
        <div className="px-8 py-8 md:px-16">
          <div className="mb-6">
            <h2 className="text-xl font-archivo uppercase font-bold mb-4">
              Savoir-faire technologique
            </h2>
            <div className="flex flex-wrap gap-2">
              {skillData.techSkills.map((tech) => (
                <Tag key={tech} text={tech} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-archivo uppercase font-bold mb-4">
              Savoir-faire méthodologique
            </h2>
            <ul className="space-y-2">
              {skillData.methodSkills.map((m, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="mt-1 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Explication de la compétence ── */}
      <section className="py-12">
        <h2 className="font-schabo text-7xl uppercase mb-10 pb-4 border-black max-sm:text-6xl max-sm:mb-0 ">
          Explication de la compétence
        </h2>

        <div className="space-y-0">
          {skillData.competences.map((ac) => (
            <div
              key={ac.id}
              className="border-b border-black py-8 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6"
            >
              {/* ID + numéro */}
              <div className="shrink-0">
                <span className="inline-block border-2 border-black px-3 py-1 text-base font-archivo font-bold uppercase">
                  {ac.id}
                </span>
                {ac.title && (
                  <p className="mt-2 text-sm text-gray-500 leading-snug">
                    {ac.title}
                  </p>
                )}
              </div>

              {/* Contenu */}
              <div>
                {ac.description ? (
                  <>
                    <p className="text-base leading-relaxed text-gray-800 mb-4">
                      {ac.description}
                    </p>
                    {ac.practice && (
                      <p className="text-base leading-relaxed text-gray-600 border-l-2 border-black pl-4 mb-4">
                        {ac.practice}
                      </p>
                    )}
                    {ac.projectLink && ac.projectLabel && (
                      <Link
                        to={ac.projectLink}
                        className="inline-flex items-center gap-1 text-base font-bold uppercase underline underline-offset-4 hover:text-gray-500 transition-colors"
                      >
                        → {ac.projectLabel}
                      </Link>
                    )}
                  </>
                ) : (
                  <p className="text-sm text-gray-300 italic">
                    Contenu à venir…
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
