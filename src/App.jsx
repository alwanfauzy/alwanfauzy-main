import profile from "./assets/profile.webp";
import email from "./assets/email.png";
import github from "./assets/github.png";
import instagram from "./assets/instagram.png";
import linkedin from "./assets/linkedin.png";
import monkeytype from "./assets/monkeytype.png";
import steam from "./assets/steam.png";
import resume from "./assets/resume.png";
import portfolio from "./assets/portfolio.png";
import Div100vh from "react-div-100vh";

function App() {
  const socials = [
    { icon: email, link: "mailto:alwanfauzi13@gmail.com" },
    { icon: github, link: "https://github.com/alwanfauzy" },
    { icon: linkedin, link: "https://linkedin.com/in/alwanfauzy" },
    { icon: instagram, link: "https://instagram.com/alwanfauzy" },
    { icon: monkeytype, link: "https://monkeytype.com/profile/alwanfauzy" },
    { icon: steam, link: "https://steamcommunity.com/id/chocorona" },
  ];
  const cards = [
    {
      name: "Resume",
      link: "https://docs.google.com/document/d/1tlXo26tF2k1ko7JkMmZfxldvS7fIf-mW/edit?usp=sharing&ouid=108685435910779053166&rtpof=true&sd=true",
      icon: resume,
    },
    {
      name: "Portfolio",
      link: "https://www.notion.so/alwanfauzy/Hello-I-m-Alwan-Fauzi-3c85d0f860ff4157b0969432dc16e370?pvs=4",
      icon: portfolio,
    },
  ];

  return (
    <Div100vh className="flex flex-col items-center justify-between py-8 px-4 bg-gradient-to-br from-rose-100 via-indigo-100 to-sky-100">
      <main className="flex flex-col items-center w-full">
        <div className="flex flex-col items-center mb-4 animate-fadeInScale">
          <div className="size-24 rounded-full overflow-hidden mb-2">
            <img src={profile} />
          </div>
          <h1 className="text-2xl font-extrabold font-outfit text-black">
            @alwanfauzy
          </h1>
        </div>

        <div className="flex space-x-2 mb-8">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white shadow-sm size-10 opacity-0 animate-fadeInScale cursor-pointer"
              style={{
                animationDelay: `${0.4 + index * 0.12}s`, // ↓ faster chaining
                animationDuration: "0.5s", // ↓ quicker transition
              }}
            >
              <img src={social.icon} alt="Social Icon" className="size-full" />
            </a>
          ))}
        </div>

        <div className="relative w-full max-w-lg">
          <div className="relative space-y-4 z-10">
            {cards.map((card, index) => (
              <a
                key={index}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block duration-300 opacity-0 animate-fadeUp"
                style={{ animationDelay: `${0.3 + index * 0.15}s` }}
              >
                <div className="p-4 bg-white rounded-lg flex items-center shadow-lg">
                  <div className="absolute flex-shrink-0 size-8">
                    <img
                      src={card.icon}
                      alt={card.name}
                      className="size-full"
                    />
                  </div>
                  <div className="flex-1 text-black font-bold text-center">
                    {card.name}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>

      <footer className="mt-12 text-sm text-gray-500 font-medium tracking-tighter">
        Made with{" "}
        <span className="text-red-500 animate-heartbeat inline-block">❤️</span>{" "}
        by <span className="font-semibold text-black">Alwan</span>
      </footer>
    </Div100vh>
  );
}

export default App;
