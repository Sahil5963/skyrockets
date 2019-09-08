// Tranparent navbar

$(document).ready(function() {
  if ($(document).scrollTop() > 50) {
    if ($(".navbar").hasClass("navbar--transparent")) {
      $(".navbar").removeClass("navbar--transparent");
    }
  }

  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      if ($(".navbar").hasClass("navbar--transparent")) {
        $(".navbar").removeClass("navbar--transparent");
      }
    } else {
      $(".navbar").addClass("navbar--transparent");
    }
  });

  $(window).scroll(function() {
    if (
      $(document).scrollTop() < 50 &&
      $(".navbar").hasClass("navbar--white")
    ) {
      $(".navbar").removeClass("navbar--transparent");
    }
  });

  //Tooltoips

  $(function() {
    $('[data-toggle="tooltip"]').tooltip();
  });
});

var tl = new TimelineMax();

tl.to("#hero-banner__rocket", 1, {
  scale: 0.7,
  opacity: 0,
  x: -80,
  rotation: -30,
  y: 400
})

  .to("#hero-banner__rocket", 2, {
    scale: 1,
    rotation: 0,
    x: 120,
    y: 0,
    opacity: 1
  })
  .to("#hero-banner__rocket__fire2", 1, {
    transformOrigin: "initial",
    scaleY: 0.7,
    repeat: -1,
    yoyo: true
  })

  .to("#hero-banner__rocket", 3, {
    rotation: 10,
    y: 12,
    x: 90,
    scale: 0.9,
    repeat: -1,
    yoyo: true
  });

TweenMax.to("#hero-banner__rocket__fire1", 0.3, {
  transformOrigin: "initial",
  scaleY: 1.4,
  repeat: -1,
  yoyo: true
});
TweenMax.to("#hero-banner__rocket__fire2", 1, {
  transformOrigin: "initial",
  scaleY: 1.2,
  repeat: -1,
  yoyo: true
});

TweenMax.to(".hero-banner__smoke--1", 4, {
  opacity: 1,
  yoyo: true,
  repeat: -1,
  x: -220
});

TweenMax.to(".hero-banner__cloud", 1, { y: 0 });
TweenMax.to(".hero-banner__smoke--2", 6, {
  opacity: 1,
  yoyo: true,
  repeat: -1,
  x: 200
});

// MOBILE NAV

$(document).ready(function() {
  var mobileNav = new TimelineMax();

  $(".navbar__toggler").click(function() {
    console.log("hey");

    mobileNav

      .to($(".mobile-nav"), 0.1, { display: "block" })
      .to($(".mobile-nav__bg"), 0.3, { scaleY: 1 })
      .to($(".mobile-nav__header"), 0.1, { opacity: 1 })
      .to($(".mobile-nav__list"), 0.4, { opacity: 1 });
  });

  $(".mobile-nav__toggler").click(function() {
    mobileNav
      .to($(".mobile-nav__list"), 0.4, { opacity: 0 })
      .to($(".mobile-nav__header"), 0.1, { opacity: 0 })
      .to($(".mobile-nav__bg"), 0.5, { scaleY: 0 })
      .to($(".mobile-nav"), 0.1, { display: "none" });
  });
});

//Hero Banner - Snap Svg

svg = document.getElementById("Layer_1");

if (svg) {
  s = Snap(svg);

  var path = Snap.select(".cloud");

  animatePath();
}

function animatePath() {
  path.animate(
    {
      d:
        "M1650.086,646.977c-9.56-11.873-60.092-12.438-64.189,3.957-84.412-60.966-162.965-128.807-203.3,0-55.323-38.274-109.365,28.283-119.948,57.55-3.387-19.036,12.32-61.118-33.409-92.926s-59.867-1.173-89.825,19.69c-12.563-32.3-46.044-31.315-60.428-31.807-58.949-2.019-40.338,101.275-112.525,0-27.719-3.091,1.675,81.815-36.093,91.542s-25.724-83.912-104.033-79.424-60.416,64.435-60.416,64.435-36.067-36.763-75.635-33.016-76.27,22.065-82.639,48.005c-14.862-8.855-61.08-27.256-99.114,5.3-27.706-26.953-125.93-114.458-206.614-12.727s-490.676-38.313-512.528-40.575v89.706H1709.019V611.924C1687.167,614.186,1652.818,630.581,1650.086,646.977Z"
    },
    900,
    resetPath
  );
}

function resetPath() {
  path.animate(
    {
      d:
        "M1650.086,646.977c-9.56-11.873-60.092-12.438-64.189,3.957-84.412-60.966-174.813,1.7-196.817,29.058-55.323-38.274-115.853-.776-126.435,28.491-3.387-19.036,12.32-61.118-33.409-92.926s-59.867-1.173-89.825,19.69c-12.563-32.3-46.044-31.315-60.428-31.807-58.949-2.019-52.133,33.643-68.593,31.807-27.719-3.091-40.135-81.671-77.9-71.944s-21.478,58.522-99.787,63.01-66.784,53.679-66.784,53.679-36.067-36.763-75.635-33.016-76.27,22.065-82.639,48.005c-14.862-8.855-61.08-27.256-99.114,5.3-27.706-26.953-111.072-71.286-206.614-12.727s-490.676-5.3-512.528-7.559v56.691H1709.019V611.924C1687.167,614.186,1652.818,630.581,1650.086,646.977Z"
    },
    800,
    animatePath
  );
}

// PROJECTS COLLECTION VUE

const projectFull = new TimelineMax();

const ProjectFull = {
  data() {
    return {
      project: {}
    };
  },

  template: `
  
  <div class="project-full" v-on:leave="leave()">

  <div class="project-full__backdrop"  id="project-full__backdrop" v-on:click="goBack()" >

  </div>

  <div class="project-full__wrapper">

    <div class="project-full__content">

      <!-- <div class="project-full__close" id="project-full__close">
          <svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 74 74"><defs>
          </defs><g transform="translate(-1492 -44)"><rect class="a" width="74" height="74" rx="37" transform="translate(1492 44)"/><g transform="translate(6 7)"><line class="b" x2="26.108" y2="26.108" transform="translate(1509.5 62.5)"/><line class="b" x1="26.108" y2="26.108" transform="translate(1509.5 62.5)"/></g></g></svg>
      </div> -->

      <div class="project-full__actions">
          <button class="project-full__close" v-on:click="goBack()" >Close</button>
          <button class="project-full__expand" v-on:click="expandFull()">Expand Full</button>
        </div>


        <div class="project-section">
            <div class="project-section__header project-section__header--mobile px-2 mt-2">
              <h2 class="project-section__name">{{project.title}}</h2>
      
            </div>
      
            <div class="project-section__image">
              <img v-bind:src="project.thumbnail"  alt="">
              <div class="project-section__info">
                  <label>Project Lead : </label> {{project.projectLead}}<br>
                <label>Status : </label> {{project.status}}<br>
                <label>Start Date: </label> {{project.startDate}} <br>
                </div>
      
                
                
        
                <div class="project-section__contribute">
                  <a :href="project.githubLink">
                    <label>Source Code Available</label>
                    <img src="./image/svg/github1.svg" alt="">
                  </a>
                  <a :href="project.githubLink">
                      <label>Appretiate Designs</label>
                      <img src="./image/svg/dribble1.svg" alt="">
                  </a>
                </div>
      
            </div>
            <div class="project-section__content">
      
                <div class="project-section__header project-section__header--desk">
                    <h2 class="project-section__name">{{project.title}}</h2>
                  </div>
      
                  <div class="project-section__overview py-1">
      
                   
                    <p>{{project.description}}</p>
      
                  </div>
      
                  <div class="project-section__divider"></div>
      
                  
      
                  <div class="project-section__technologies-container py-1">
      
                      <h5 class="project-section__sub-heading">Technologies Involved</h5>
                      <div class="project-section__technologies">
                        <div class="project-section__technology" v-for="technology in project.technologies">{{technology}}</div>
                      
                      </div>
        
                    </div>
                    <div class="project-section__divider"></div>
      
                    <div class="project-section__feature py-1"  v-if="project.features">
      
                        <h5 class="project-section__sub-heading">Features of the application</h5>
                        <ul class="project-section__feature__list">
                          <li class="project-section__feature__item" v-for="feature in project.features">{{feature}}</li>
          
                        </ul>
          
                      </div>

                    
      
            </div>

            

            <div class="project-section__full-width">
                <div class="project-section__divider"></div>

              <div class="project-section__screens">

                  <h5 class="project-section__sub-heading project-section__screens__heading">Screens</h5>
                  <div class="project-section__screens__items"  v-bind:class="{ 'project-section__screens__items--half': project.half }">
                    <div class="project-section__screens__item" v-for="screen in project.screens">
                    <h6 class="project-section__screens__item__label">Screen </h6>
                        <a :href="screen" target="_blank">
                          <img  v-bind:src="screen"  alt="" alt="" class="project-section__screen">
                          </a>
                    </div>
                  </div>

              </div>


                <div class="project-section__divider"></div>
      
                <div class="project-section__members py-1 px-4">

                    <h5 class="project-section__sub-heading">Project Members</h5>

                    <div class="project-section__members__avtars">

                      <a :href="member.link" class="project-section__members__avtar" v-for="member in project.projectMembers">
                      
                        <div class="project-section__members__avtar__image">
                            <img  v-bind:src="member.image" alt="">
                        </div>
                        <div class="project-section__members__avtar__content">
                          <h4 class="project-section__members__avtar__name">{{member.name}}</h4>
                          <label for="" class="project-section__members__avtar__role">{{member.role}}</label>
                        </div>
                        
                        </a>
                      </div>
  
                    


      
                  </div>

                  <div class="project-section__appreciate py-4">

                    <button>Appreciate <span>40</span></button>


                  </div>


            </div>
      
      
      
          </div>
      
    </div>
    
    
  </div>


</div>`,

  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData"
  },

  methods: {
    expand() {
      projectFull.play();
    },

    expandFull() {
      projectFull.to(".project-full__wrapper", 0.2, {
        width: "100%"
      });
    },

    fetchData() {
      fetch("/sample.json")
        .then(response => {
          return response.json();
        })
        .then(myJson => {
          for (i = 0; i < myJson.length; i++) {
            if (myJson[i].name == this.$route.params.name) {
              this.project = myJson[i];
            }
          }
        });

      // axios.get('/sample.json')
      //   .then((response) =>{

      //     console.log(response.data[0]);

      //     this.project = {...response.data[0]};
      //   })
    },
    goBack() {
      projectFull
        .to(".project-full__content", 0.2, { opacity: 0 })
        .to(".project-full__wrapper", 0.6, {
          width: "0%",
          // width: $(window).width() > 600 ? "85%" : "100%",
          ease: Quint.easeInOut
        })
        .to(".project-full", 0.1, { display: "none" });

      setTimeout(() => {
        this.$router.go(-1);
      }, 1000);
    }
  },

  mounted() {
    projectFull
      .to(".project-full", 0.1, { display: "block" })
      .to(".project-full__wrapper", 0.1, { opacity: 1 })
      .to(".project-full__backdrop", 0.1, { opacity: 1 })
      .to(".project-full__wrapper", 0.6, {
        width: "85%",
        // width: $(window).width() > 600 ? "85%" : "100%",
        ease: Quint.easeInOut
      })
      .to(".project-full__content", 1, { opacity: 1 });

    $("body").addClass("disable-scrolling");
  },

  beforeDestroy() {
    $("body").removeClass("disable-scrolling");
    console.log("before destroy");
  }
};

const routes = [{ path: "/project/:name", component: ProjectFull }];

const router = new VueRouter({
  routes
});

var projectsCollection = new Vue({
  el: "#projects-collection",
  data: {
    fetchedData: null,
    project: {
      thumbnail: "",
      name: "",
      title: "",
      description: "",
      projectLead: "",
      status: "",
      startDate: "",
      technologies: null,
      features: null,
      githubLink: null,
      screens: null,
      projectMembers: null
    }
  },
  methods: {
    getData: function(id) {
      const data = fetch("/sample.json")
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);

          for (i = 0; i < myJson.length; i++) {
            if (myJson[i].name == id) {
              projectsCollection.project = { ...myJson[i] };
            }
          }
        });
    },

    goBack: function() {
      console.log("go back");
      this.$router.go(-1);
    }
  },
  components: {
    "project-full": ProjectFull
  },
  router
});
