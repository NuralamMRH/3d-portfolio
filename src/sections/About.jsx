import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";

const tools = [
  {
    link: "https://developer.android.com",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg",
    alt: "android",
  },
  {
    link: "https://appwrite.io",
    image: "https://www.vectorlogo.zone/logos/appwriteio/appwriteio-icon.svg",
    alt: "appwrite",
  },
  {
    link: "https://aws.amazon.com",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    alt: "aws",
  },
  {
    link: "https://azure.microsoft.com/en-in/",
    image:
      "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg",
    alt: "azure",
  },
  {
    link: "https://babeljs.io/",
    image: "https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg",
    alt: "babel",
  },
  {
    link: "https://www.gnu.org/software/bash/",
    image: "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg",
    alt: "bash",
  },

  {
    link: "https://getbootstrap.com",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
    alt: "bootstrap",
  },
  {
    link: "https://canvasjs.com",
    image:
      "https://raw.githubusercontent.com/Hardik0307/Hardik0307/master/assets/canvasjs-charts.svg",
    alt: "canvasjs",
  },
  {
    link: "https://www.chartjs.org",
    image: "https://www.chartjs.org/media/logo-title.svg",
    alt: "chartjs",
  },

  {
    link: "https://d3js.org/",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/d3js/d3js-original.svg",
    alt: "d3js",
  },
  {
    link: "https://dart.dev",
    image: "https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg",
    alt: "dart",
  },
  {
    link: "https://www.djangoproject.com/",
    image: "https://cdn.worldvectorlogo.com/logos/django.svg",
    alt: "django",
  },
  {
    link: "https://www.docker.com/",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
    alt: "docker",
  },
  {
    link: "https://www.electronjs.org",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg",
    alt: "electron",
  },
  {
    link: "https://expressjs.com",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
    alt: "express",
  },
  {
    link: "https://www.figma.com/",
    image: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    alt: "figma",
  },
  {
    link: "https://firebase.google.com/",
    image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    alt: "firebase",
  },
  {
    link: "https://flutter.dev",
    image: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
    alt: "flutter",
  },
  {
    link: "https://www.framer.com/",
    image: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg",
    alt: "framer",
  },
  {
    link: "https://cloud.google.com",
    image:
      "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
    alt: "gcp",
  },
  {
    link: "https://git-scm.com/",
    image: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    alt: "git",
  },

  {
    link: "https://graphql.org",
    image: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
    alt: "graphql",
  },
  {
    link: "https://heroku.com",
    image: "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg",
    alt: "heroku",
  },

  {
    link: "https://jasmine.github.io/",
    image: "https://www.vectorlogo.zone/logos/jasmine/jasmine-icon.svg",
    alt: "jasmine",
  },
  {
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    alt: "javascript",
  },
  {
    link: "https://jestjs.io",
    image: "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg",
    alt: "jest",
  },

  {
    link: "https://kotlinlang.org",
    image: "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg",
    alt: "kotlin",
  },
  {
    link: "https://www.linux.org/",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
    alt: "linux",
  },
  {
    link: "https://www.mongodb.com/",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
    alt: "mongodb",
  },
  {
    link: "https://www.mysql.com/",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
    alt: "mysql",
  },
  {
    link: "https://nextjs.org/",
    image: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
    alt: "nextjs",
  },
  {
    link: "https://www.nginx.com",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg",
    alt: "nginx",
  },
  {
    link: "https://nodejs.org",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    alt: "nodejs",
  },
  {
    link: "https://opencv.org/",
    image: "https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg",
    alt: "opencv",
  },
  {
    link: "https://www.php.net",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
    alt: "php",
  },
  {
    link: "https://www.postgresql.org",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
    alt: "postgresql",
  },
  {
    link: "https://postman.com",
    image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    alt: "postman",
  },
  {
    link: "https://pytorch.org/",
    image: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg",
    alt: "pytorch",
  },
  {
    link: "https://reactjs.org/",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    alt: "react",
  },
  {
    link: "https://reactnative.dev/",
    image: "https://reactnative.dev/img/header_logo.svg",
    alt: "reactnative",
  },
  {
    link: "https://redux.js.org",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    alt: "redux",
  },
  {
    link: "https://www.ruby-lang.org/en/",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg",
    alt: "ruby",
  },
  {
    link: "https://sass-lang.com",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
    alt: "sass",
  },
  {
    link: "https://www.sqlite.org/",
    image: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg",
    alt: "sqlite",
  },
  {
    link: "https://developer.apple.com/swift/",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg",
    alt: "swift",
  },
  {
    link: "https://tailwindcss.com/",
    image: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    alt: "tailwind",
  },
  {
    link: "https://www.tensorflow.org",
    image: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg",
    alt: "tensorflow",
  },
  {
    link: "https://www.typescriptlang.org/",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    alt: "typescript",
  },
  {
    link: "https://vuejs.org/",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg",
    alt: "vuejs",
  },
];

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/rana.jpeg"
            className="absolute scale-[1.4] -right-[5rem] -top-[0rem] md:scale-[3] md:left-50 md:inset-y-70 lg:scale-[1.8]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I&apos;m Nuralam Mrh</p>
            <p className="subtext">
              Over the last 5 years, I developed my frontend and backend dev
              skills to deliver dynamic and software and web applications.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="GRASP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Design Patterns"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Design Principles"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="SRP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/csharp-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/dotnet-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/blazor-pink.png"
              containerRef={grid2Container}
            />
            {tools.map((tool, index) => (
              <Card
                key={index}
                image={tool.image}
                containerRef={grid2Container}
                style={{
                  rotate: `${(index % 9) - 4}deg`,
                  top: `${5 + (Math.floor(index / 10) % 8) * 10}%`,
                  left: `${5 + (index % 10) * 9}%`,
                }}
              />
            ))}
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I&apos;m based in Mars, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools taht
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
