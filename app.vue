<script setup lang="ts">
import { subastas } from "~/data/subastas";

const subastaItemSelected = ref(null);
const isSubastasModalActive = ref(false);

const defaultSlide = ref(null);
const defaultSlideMobile = ref(null);
const selectedSlide = ref("drill-pipe");
const visitedSections = ref([]);

const handleSubastaItemSelected = (item) => {
  isSubastasModalActive.value = true;
  subastaItemSelected.value = item;
};

const handleSubastasModalClose = () => {
  isSubastasModalActive.value = false;
};

const handleSlideChange = (slide: string) => {
  selectedSlide.value = slide;
};

const handleHoverSection = (section: string) => {
  if (!visitedSections.value.includes(section)) {
    visitedSections.value.push(section);
  }
};

onMounted(() => {
  defaultSlide.value.click();
  defaultSlideMobile.value.click();
});
</script>

<template>
  <div>
    <main>
      <!--MAIN HEADER-->
      <div class="main-header-wrapper">
        <input type="checkbox" id="header-toggle" class="header-toggle" />
        <div class="main-header">
          <ul>
            <li class="main-li">
              <a class="header_nav" href="#home"><span></span>Principal</a>
            </li>
            <li>
              <a class="header_nav" href="#about">Nosotros</a>
            </li>
            <li>
              <a class="header_nav" href="#materiales">Materiales</a>
            </li>
            <li>
              <a class="header_nav" href="#subastas">Subastas</a>
            </li>
            <li>
              <a class="header_nav" href="#contact">Contacto</a>
            </li>
          </ul>
          <label class="toggle-label" for="header-toggle"><a></a></label>
        </div>
      </div>
      <!--HOME SECTION-->
      <section class="home" id="home">
        <span class="main-line"></span>
        <div class="home-content-wrapper">
          <img
            class="logo"
            src="~/assets/img/logo_final.png"
            alt="Logo Deposito San Antonio E Hijos"
          />
          <h1>Depósito San Antonio E Hijos S.A.S</h1>
          <p>
            Compra y venta de materiales industriales. Comercializamos tuberías,
            barras y ejes de acero, nuevos y de segunda mano.
          </p>
        </div>
        <div class="wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
            <path
              fill-opacity="1"
              class="wave-svg"
              d="M0,160L120,170.7C240,181,480,203,720,213.3C960,224,1200,224,1320,224L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
      <section
        id="about"
        class="about"
        :class="{ visited: visitedSections.includes('about') }"
        @mouseenter="() => handleHoverSection('about')"
      >
        <div class="about-content-wrapper">
          <h2 class="header-moves">Nosotros</h2>
          <p>
            Nos caracterizamos por brindar un servicio de calidad con precios
            más asequibles para nuestros clientes, contribuyendo al desarrollo
            de Colombia.
          </p>
          <br />
          <p>
            La empresa se desempeña en varios campos de actividad petrolera y de
            construcción. Con ventas al retal y de línea con productos nuevos y
            de segunda mano.
          </p>
          <img class="about_img" src="~/assets/img/tubos.png" alt="tubería" />
        </div>
        <div class="wave2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
            <path
              fill-opacity="1"
              class="wave-svg2"
              d="M0,160L120,170.7C240,181,480,203,720,213.3C960,224,1200,224,1320,224L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      <!--MATERIALES SECTION-->
      <section
        id="materiales"
        class="materiales"
        :class="{ visited: visitedSections.includes('materiales') }"
        @mouseenter="() => handleHoverSection('materiales')"
      >
        <!--DESKTOP-->
        <div class="materiales-container-desktop">
          <div class="materiales_title-desktop">
            <h2 class="materiales_title header-moves">MATERIALES</h2>
          </div>
          <div class="materiales-info-desktop">
            <div class="slider-desktop">
              <input
                type="radio"
                name="slide"
                id="slide-1"
                ref="defaultSlide"
                @change="() => handleSlideChange('drill-pipe')"
              />
              <input
                type="radio"
                name="slide"
                id="slide-2"
                @change="() => handleSlideChange('line-pipe')"
              />
              <input
                type="radio"
                name="slide"
                id="slide-3"
                @change="() => handleSlideChange('barras')"
              />
              <input
                type="radio"
                name="slide"
                id="slide-4"
                @change="() => handleSlideChange('ejes')"
              />
              <div class="slider-content-desktop slide-1">
                <h3>Drill Pipe</h3>
                <p>
                  La tubería de perforación <strong>Drill Pipe</strong> se
                  compone de un tubo sin costuras, grande y pesado que gira
                  sobre el eje del taladro y permite el flujo del líquido.
                </p>
                <div class="medidas-container-desktop">
                  <div class="medidas-desktop">
                    <p><strong>Con medidas desde:</strong></p>
                    <ul>
                      <li>3 1/2"</li>
                      <li>5"</li>
                      <li>6 5/8"</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="slider-content-desktop slide-2">
                <h3>LINE PIPE</h3>
                <p>
                  La <strong>tubería de línea</strong> permite transportar
                  diferentes tipos de fluidos como agua, aceite, combustible,
                  petróleo, entre otros.
                </p>
              </div>
              <div class="slider-content-desktop slide-3">
                <h3>BARRAS PERFORADAS</h3>
                <p>
                  <strong>Barra perforadora</strong> es un acero de alta
                  resistencia que gracias a su capacidad de ser soldada, se
                  utiiliza en mecanizados.
                </p>
              </div>
              <div class="slider-content-desktop slide-4">
                <h3>EJES</h3>
                <p>
                  La <strong>barra de acero al carbono</strong> es perfecta para
                  usos generales, contiene acero bajo en carbono, esta puede
                  aportar una excelente conformabilidad y soldadibilidad.
                </p>
              </div>
            </div>
            <div class="mat-img-desktop">
              <label class="img-label" for="slide-1">
                <img
                  tabindex="0"
                  class="mat-img"
                  :class="{ selected: selectedSlide === 'drill-pipe' }"
                  src="~/assets/img/drillpipe.png"
                  alt="Tubería Drill Pipe"
                />
                <span class="label-description"
                  ><strong>DRILL PIPE</strong></span
                >
              </label>
              <label class="img-label" for="slide-2"
                ><img
                  tabindex="0"
                  class="mat-img"
                  :class="{ selected: selectedSlide === 'line-pipe' }"
                  src="~/assets/img/linepipe_1.png"
                  alt="Tubería Line Pipe"
                />
                <span class="label-description"
                  ><strong>LINE PIPE</strong></span
                >
              </label>
              <label class="img-label" for="slide-3"
                ><img
                  tabindex="0"
                  class="mat-img"
                  :class="{ selected: selectedSlide === 'barras' }"
                  src="~/assets/img/barra_perforadora.png"
                  alt="Tubería Barras Perforadoras"
                />
                <span class="label-description"><strong>BARRAS</strong></span>
              </label>
              <label class="img-label" for="slide-4"
                ><img
                  tabindex="0"
                  class="mat-img"
                  :class="{ selected: selectedSlide === 'ejes' }"
                  src="~/assets/img/ejes_1.png"
                  alt="Tubería Ejes"
                />
                <span class="label-description"><strong>EJES</strong></span>
              </label>
            </div>
          </div>
        </div>
        <!--MOBILE-->
        <div class="materiales-divider">
          <div class="materiales-container">
            <h2 class="materiales_title header-moves">MATERIALES</h2>
            <div class="slider">
              <input
                type="radio"
                name="slide-mobile"
                id="slide1"
                ref="defaultSlideMobile"
                @change="() => handleSlideChange('drill-pipe')"
              />
              <input
                type="radio"
                name="slide-mobile"
                id="slide2"
                @change="() => handleSlideChange('line-pipe')"
              />
              <input
                type="radio"
                name="slide-mobile"
                id="slide3"
                @change="() => handleSlideChange('barras')"
              />
              <input
                type="radio"
                name="slide-mobile"
                id="slide4"
                @change="() => handleSlideChange('ejes')"
              />
              <div class="slider-content slide1">
                <h3>Drill Pipe</h3>
                <p>
                  La tubería de perforación <strong>Drill Pipe</strong> se
                  compone de un tubo sin costuras, grande y pesado que gira
                  sobre el eje del taladro y permite el flujo del líquido.
                </p>
                <div class="medidas-container">
                  <img
                    class="mat_img"
                    src="~/assets/img/drillpipe.png"
                    alt="Tubería Drill Pipe"
                  />
                  <div class="medidas">
                    <p><strong>Con medidas desde:</strong></p>
                    <ul>
                      <li>3 1/2"</li>
                      <li>5"</li>
                      <li>6 5/8"</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="slider-content slide2">
                <h3>LINE PIPE</h3>
                <p>
                  La <strong>tubería de línea</strong> permite transportar
                  diferentes tipos de fluidos como agua, aceite, combustible,
                  petróleo, entre otros.
                </p>
                <img
                  class="mat_img"
                  src="~/assets/img/linepipe_1.png"
                  alt="Tubería Line Pipe"
                />
              </div>
              <div class="slider-content slide3">
                <h3>BARRAS PERFORADAS</h3>
                <p>
                  <strong>Barra perforadora</strong> es un acero de alta
                  resistencia que gracias a su capacidad de ser soldada, se
                  utiiliza en mecanizados.
                </p>
                <img
                  class="mat_img"
                  src="~/assets/img/barra_perforadora.png"
                  alt="Tubería Barras Perforadoras"
                />
              </div>
              <div class="slider-content slide4">
                <h3>EJES</h3>
                <p>
                  La <strong>barra de acero al carbono</strong> es perfecta para
                  usos generales, contiene acero bajo en carbono, esta puede
                  aportar una excelente conformabilidad y soldadibilidad.
                </p>
                <img
                  class="mat_img"
                  src="~/assets/img/ejes_1.png"
                  alt="Tubería Ejes"
                />
              </div>
            </div>
          </div>
          <div class="dots" tabindex="0">
            <label
              for="slide1"
              tabindex="0"
              :class="{ selected: selectedSlide === 'drill-pipe' }"
            ></label>
            <label
              for="slide2"
              tabindex="0"
              :class="{ selected: selectedSlide === 'line-pipe' }"
            ></label>
            <label
              for="slide3"
              tabindex="0"
              :class="{ selected: selectedSlide === 'barras' }"
            ></label>
            <label
              for="slide4"
              tabindex="0"
              :class="{ selected: selectedSlide === 'ejes' }"
            ></label>
          </div>
        </div>
        <div class="wave2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
            <path
              fill-opacity="1"
              class="wave-svg"
              d="M0,160L120,170.7C240,181,480,203,720,213.3C960,224,1200,224,1320,224L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      <!--SUBASTAS SECTION-->
      <section
        id="subastas"
        class="subastas"
        :class="{ visited: visitedSections.includes('subastas') }"
        @mouseenter="() => handleHoverSection('subastas')"
      >
        <div class="subastas-content">
          <div class="subastas_title header-moves">
            <div>
              <h2>SUBASTAS</h2>
              <p>
                En esta sección puedes crear subastas para todos los productos
                que encuentras a continuación.
              </p>
            </div>
          </div>
          <div class="subastas-content-box">
            <div class="subastas-content-container">
              <div
                v-for="item in subastas"
                :key="item.name"
                class="subastas-content-wrapper"
              >
                <div class="subastas-hover">
                  <button
                    name="subastas-button"
                    class="subastas-button"
                    @click="() => handleSubastaItemSelected(item)"
                  >
                    <a>Realizar Oferta</a>
                  </button>
                </div>
                <img
                  class="subastas_img"
                  :src="`/img/${item.img}`"
                  :alt="item.imgAlt"
                />
                <h4 class="subastas_info">{{ item.name }}</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
            <path
              fill-opacity="1"
              class="wave-svg2"
              d="M0,160L120,170.7C240,181,480,203,720,213.3C960,224,1200,224,1320,224L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      <!--CONTACT SECTION-->
      <section
        id="contact"
        class="contact"
        :class="{ visited: visitedSections.includes('contact') }"
        @mouseenter="() => handleHoverSection('contact')"
      >
        <div class="contact-content">
          <div class="contact_title header-moves"><h2>CONTACTO</h2></div>
          <div class="contact-content-container">
            <div class="contact-content-wrapper">
              <div class="contact-content_info1">
                <img
                  class="contact-logo"
                  src="~/assets/img/logo_final.png"
                  alt="Logo Deposito San Antonio E Hijos"
                />
                <h4>Deposito San Antonio e hijos S.A.S</h4>
                <span>Carrera 28 # 7-76</span>
                <span>Colombia-Bogotá</span>
                <span>Tel. (57) 315 38 30 711</span>
                <span>(57) 2 77 44 03</span>
              </div>
            </div>
            <div class="contact-content-wrapper">
              <div class="contact-content_info2">
                <form class="contact_form">
                  <label for="empresa">Empresa</label>
                  <input type="text" id="empresa" name="user_empresa" />
                  <label for="email">Correo</label>
                  <input type="email" id="email" name="user_email" />
                  <label for="asunto">Asunto</label>
                  <textarea id="asunto" name="user_asunto"></textarea>
                  <button type="submit">Enviar</button>
                </form>
              </div>
            </div>
            <div class="contact-content-wrapper">
              <div class="contact-content_info3">
                <h4>Escríbenos por whatsapp</h4>
                <img src="~/assets/img/whatsapp.png" alt="whatsapp logo" />
                <span>Tel. (57) 315 38 30 711</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!--MODAL SUBASTAS-->
    <AppSubastasModal
      :isActive="isSubastasModalActive"
      :item="subastaItemSelected"
      @close="() => handleSubastasModalClose()"
    />

    <!--WHATSAPP ICON-->
    <aside class="whatsapp">
      <a href="https://web.whatsapp.com/" target="_blank"
        ><img src="~/assets/img/whatsapp.png" alt="Whatsapp logo"
      /></a>
    </aside>

    <footer></footer>
  </div>
</template>
