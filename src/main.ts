import Handlebars from "handlebars";
import "./index.less";

const skills = [
  {
    name: "FIGMA",
    complete: "60%",
    icon: "fa-brands fa-figma",
    width: "w-2/5",
  },
  {
    name: "PHP / C++",
    complete: "80%",
    icon: "fa-brands fa-php",
    width: "w-4/5",
  },
  {
    name: "JAVESCRIPT",
    complete: "75%",
    icon: "fa-brands fa-js",
    width: "w-3/4",
  },
  {
    name: "REACT / NEST.JS",
    complete: "75%",
    icon: "fa-brands fa-react",
    width: "w-3/4",
  },
  {
    name: "HTML5 / CSS3",
    complete: "90%",
    icon: "fa-brands fa-html5",
    width: "w-90%",
  },
  {
    name: "VUE.JS",
    complete: "55%",
    icon: "fa-brands fa-vuejs",
    width: "w-1/2",
  },
];

const skillsElement: HTMLElement | null = document.getElementById("skills");

if (skillsElement) {
  const source = `<div class="w-1/2 mb-10 px-3 max-xl:w-full">
  <div class="box-icon flex justify-between">
    <div class="flex">
      <div
        class="flex relative w-16 h-16 text-3xl border-solid border-2 border-black pb-1 justify-center items-center before:absolute before:-left-2 before:-top-2 before:bg-custom-color before:w-full before:h-full before:-z-10"
      >
        <i class="{{icon}}"></i>
      </div>
    </div>
    <div class="w-calc-100-minus-90">
      <span class="font-semibold text-base uppercase"
        >{{name}}</span
      >
      <div
        class="border-b-2 border-solid border-b-gray-300 py-1 ml-2"
      >
        <div
          class="{{width}} relative -left-2 h-3 border-b-2 border-r-2 border-orange-600"
        >
          <span
            class="absolute top-0 right-0 translate-x-4 -translate-y-6"
            >{{complete}}</span
          >
        </div>
      </div>
    </div>
  </div>
</div>`;

  const template = Handlebars.compile(source);
  const skillsHTML = skills.map((skill) => template(skill)).join("");

  skillsElement.innerHTML = skillsHTML;
}
