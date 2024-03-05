import "./index.less";
import Handlebars from "handlebars";

// Handlebars Education
const edu = [
  {
    icon: "+",
    img: "https://html.bslthemes.com/treto/img/certificate.jpg",
    name: "Backend Programming",
    start: "2020",
    end: "2021",
    para: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining unchanged.",
  },
  {
    icon: "+",
    img: "https://html.bslthemes.com/treto/img/certificate.jpg",
    name: "Master in Graphic",
    start: "2019",
    end: "2020",
    para: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining unchanged.",
  },
  {
    icon: "+",
    img: "https://html.bslthemes.com/treto/img/certificate.jpg",
    name: "Bachelors of FineArt",
    start: "2017",
    end: "2018",
    para: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining unchanged.",
  },
];

const educationElement: HTMLElement | null =
  document.getElementById("content-edu");

if (educationElement) {
  const source = `<div class="flex mb-10 px-1">
  <div class="flex justify-start items-start">
    <div
      class="relative border-2 border-solid border-black box-border w-16 h-16 flex justify-center items-center pb-2"
    >
      <div
        class="absolute bg-zinc-200 -top-3.5 -left-3.5 w-16 h-16 -z-10"
      ></div>
      <div
        class="absolute -top-14 left-auto -right-7 box-phone w-16 h-16 -z-10"
      ></div>
      <a
        href="{{img}}"
        class="text-black font-Jost-Font font-normal text-3xl image-link"
        >{{icon}}</a
      >
    </div>
  </div>

  <div class="pl-10 pt-1">
    <p
      class="text-black uppercase font-Jost-Font font-semibold text-base mb-2"
    >
      {{name}}
    </p>

    <p
      class="text-black uppercase font-Jost-Font font-medium text-sm mb-5"
    >
      {{start}} <span class="text-orange-600"> to </span> {{end}}
    </p>

    <p
      class="text-black font-Jost-Font font-light text-lg leading-8"
    >
      {{para}}
    </p>
  </div>
</div>`;
  const template = Handlebars.compile(source);
  const contentEduHTML = edu.map((el) => template(el)).join("");

  educationElement.innerHTML = contentEduHTML;
}
// Handlebars Education end

// Handlebars Experience
const exp = [
  {
    name: "Freelancer",
    start: "today",
    end: "",
    para: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining unchanged.",
  },
  {
    name: "Agency Macll",
    start: "2019",
    end: "2022",
    para: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining unchanged.",
  },
  {
    name: "Envato",
    start: "2017",
    end: "2019",
    para: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining unchanged.",
  },
  {
    name: "Themeforest",
    start: "2014",
    end: "2017",
    para: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining unchanged.",
  },
];

const experienceElement: HTMLElement | null =
  document.getElementById("content-exp");

if (experienceElement) {
  const source = `<div class="swiper-slide">
  <div class="mr-10 mb-7 flex">
    <div class="w-full">
      <p
        class="text-black uppercase font-Jost-Font font-semibold text-base mb-2"
      >
      {{name}}
      </p>

      <p
        class="text-black uppercase font-Jost-Font font-medium text-sm mb-5"
      >
        {{start}} <span class="text-orange-600"> to </span> {{end}}
      </p>

      <p
        class="text-black font-Jost-Font font-light text-lg leading-8"
      >
        {{para}}
      </p>
    </div>
  </div>
</div>`;
  const template = Handlebars.compile(source);
  const contentExpHTML = exp.map((el) => template(el)).join("");

  experienceElement.innerHTML = contentExpHTML;
}
// Handlebars Experience end

// Handlebars Service
const ser = [
  {
    icon: "fa-solid fa-code",
    name: "Web Development",
    cost: "$29",
    para: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining unchanged.",
  },
  {
    icon: "fa-solid fa-palette",
    name: "Branding",
    cost: "$39",
    para: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining unchanged.",
  },
  {
    icon: "fas fa-server",
    name: "Server Managment",
    cost: "$49",
    para: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining unchanged.",
  },
];

const serviceElement: HTMLElement | null =
  document.getElementById("content-ser");

if (serviceElement) {
  const source = `<div class="flex mb-10 2xl:pr-14 xl:pr-14">
  <div class="flex justify-start items-start">
    <div
      class="relative border-2 border-solid border-black box-border w-16 h-16 flex justify-center items-center pb-2"
    >
      <div
        class="absolute bg-zinc-200 -top-3.5 -left-3.5 w-16 h-16 -z-10"
      ></div>
      <div
        class="absolute -top-14 left-auto -right-7 box-phone w-16 h-16 -z-10"
      ></div>
      <div class="text-black font-Jost-Font font-normal text-3xl">
        <i class="{{icon}}"></i>
      </div>
    </div>
  </div>

  <div class="pl-10 pt-1">
    <p
      class="text-black uppercase font-Jost-Font font-semibold text-base mb-2"
    >
      {{name}}
    </p>

    <p
      class="text-black uppercase font-Jost-Font font-medium text-sm mb-5"
    >
      {{cost}} <span class="text-orange-600"> per hour </span>
    </p>

    <p
      class="text-black font-Jost-Font font-light text-lg leading-8"
    >
      {{para}}
    </p>
  </div>
</div>`;
  const template = Handlebars.compile(source);
  const contentSerHTML = ser.map((el) => template(el)).join("");

  serviceElement.innerHTML = contentSerHTML;
}
// Handlebars Service end

// Handlebars Testimonials
const tes = [
  {
    img: "https://html.bslthemes.com/treto/img/faces/clients/1.jpg",
    alt: "client1",
    firstName: "Isabella",
    lastName: "Wilson",
    position: "Director at Geands Hotel",
    para: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  },
  {
    img: "https://html.bslthemes.com/treto/img/faces/clients/2.jpg",
    alt: "client2",
    firstName: "Isabella",
    lastName: "Wilson",
    position: "Director at Geands Hotel",
    para: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  },
  {
    img: "https://html.bslthemes.com/treto/img/faces/clients/3.jpg",
    alt: "client3",
    firstName: "Isabella",
    lastName: "Wilson",
    position: "Director at Geands Hotel",
    para: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  },
  {
    img: "https://html.bslthemes.com/treto/img/faces/clients/4.jpg",
    alt: "client4",
    firstName: "Isabella",
    lastName: "Wilson",
    position: "Director at Geands Hotel",
    para: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  },
];

const testimonialsElement: HTMLElement | null =
  document.getElementById("content-tes");

if (testimonialsElement) {
  const source = `<div class="swiper-slide">
  <div
    class="flex mb-10 2xl:flex-row xl:flex-row lg:flex-row flex-col"
  >
    <div
      class="flex justify-start items-start 2xl:w-1/3 xl:w-1/3 lg:w-1/3 w-full"
    >
      <div
        class="relative flex justify-center items-center pb-2"
      >
        <div
          class="border-2 border-solid box-border absolute border-black top-3.5 left-3.5 -right-3.5 -bottom-2 w-full"
        ></div>
        <img
          src="{{img}}"
          alt="{{alt}}"
          class="w-40 h-40"
        />
      </div>
    </div>

    <div
      class="2xl:w-2/3 xl:w-2/3 lg:w-2/3 w-full mr-20 2xl:mt-0 xl:mt-0 lg:mt-0 mt-10"
    >
      <p
        class="text-black font-Jost-Font font-light text-lg leading-8 mb-7 text-wrap"
      >
        {{para}}
      </p>

      <p
        class="text-black uppercase font-Jost-Font font-semibold text-base mb-2"
      >
        {{firstName}}
        <span class="text-orange-600"> {{lastName}} </span>
      </p>

      <p
        class="text-black font-Jost-Font font-light text-lg leading-8 mb-7"
      >
        {{position}}
      </p>
    </div>
  </div>
</div>`;
  const template = Handlebars.compile(source);
  const contentTesHTML = tes.map((el) => template(el)).join("");

  testimonialsElement.innerHTML = contentTesHTML;
}
// Handlebars Testimonials end
