<template>
  <div>
    <section class="rel inner-page-hero about-section division">
      <div class="container">
        <div class="row row justify-content-center">
          <div class="col-md-11 col-lg-10 col-xl-9">
            <h2 class="s-52 w-700 mb-30">Vuetify Hello world</h2>

            <v-text-field placeholder="Example of textfield"></v-text-field>

            <v-select
                placeholder="Select a state"
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
            ></v-select>

            <v-textarea placeholder="Input your comment here"></v-textarea>

            <v-container>
              <v-row align="center" justify="center">
                <v-col cols="auto">
                  <v-btn size="x-small">Extra small Button</v-btn>
                </v-col>

                <v-col cols="auto">
                  <v-btn size="small">Small Button</v-btn>
                </v-col>

                <v-col cols="auto">
                  <v-btn>Regular Button</v-btn>
                </v-col>

                <v-col cols="auto">
                  <v-btn size="large">Large Button</v-btn>
                </v-col>

                <v-col cols="auto">
                  <v-btn size="x-large">X-Large Button</v-btn>
                </v-col>
              </v-row>
            </v-container>

            <v-container>
              <v-row>
                <v-col>
                  <v-btn color="primary">Primary Button</v-btn>
                </v-col>
                <v-col>
                  <v-btn color="secondary">Secondary Button</v-btn>
                </v-col>
                <v-col>
                  <v-dialog max-width="500">
                    <template v-slot:activator="{ props: activatorProps }">
                      <v-btn
                          v-bind="activatorProps"
                          color="surface-variant"
                          text="Open Dialog"
                          variant="flat"
                      ></v-btn>
                    </template>

                    <template v-slot:default="{ isActive }">
                      <v-card title="Dialog">
                        <v-card-text>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </v-card-text>

                        <v-card-actions>
                          <v-spacer></v-spacer>

                          <v-btn
                              text="Close Dialog"
                              @click="isActive.value = false"
                          ></v-btn>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
                </v-col>
              </v-row>
            </v-container>

            <v-row class="d-flex align-center justify-center">
              <v-col cols="auto"> <v-btn color="primary"> Primary </v-btn> </v-col>
              <v-col cols="auto">
                <v-btn color="secondary"> Secondary </v-btn>
              </v-col>
              <v-col cols="auto"> <v-btn color="error"> Error </v-btn> </v-col>
            </v-row>

            <v-row class="d-flex align-center justify-center">
              <v-col cols="auto">
                <v-btn color="info"> Info </v-btn>
              </v-col>
              <v-col cols="auto">
                <v-btn color="success"> Success </v-btn>
              </v-col>
              <v-col cols="auto">
                <v-btn color="warning"> Warning </v-btn>
              </v-col>
            </v-row>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: "navbar-dark"
  },
})
</script>
