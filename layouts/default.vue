<template>
    <v-app>
        <v-layout>
            <v-hover>
              <template v-slot:default="{ isHovering, props }">
                <v-navigation-drawer class="bg-ak-black text-white" v-bind="props" permanent expand-on-hover rail>
                    <div class="flex justify-center py-4">
                      <v-img src="@/assets/src/Akero_Icon.png" style="max-height: 31px"/>
                    </div>
                    
                    <v-divider></v-divider>
                    <v-list nav>
                        <v-menu :location="'end'" :offset="15">
                            <template v-slot:activator="{ props }">
                                <v-list-item v-bind="props" prepend-icon="mdi-account-circle" title="Sam Brown" subtitle="samraymondbrown@googlemail.com" value="accountName" class="rounded-3xl"  :class="{isHovering: 'px-4'}"></v-list-item>
                            </template>
                            <v-list density="compact" nav class="bg-stone-950 text-white">
                                <v-list-item prepend-icon="mdi-cog" title="Edit Profile" value="editProfile" class="rounded-3xl" :class="{isHovering: 'px-4'}"></v-list-item>
                                <v-list-item prepend-icon="mdi-help-circle" title="Help" value="help" class="rounded-3xl" :class="{isHovering: 'px-4'}"></v-list-item>
                                <v-list-item prepend-icon="mdi-logout" title="Logout" value="logout" class="rounded-3xl" :class="{isHovering: 'px-4'}"></v-list-item>
                            </v-list>
                        </v-menu>
                    </v-list>
                    <v-divider></v-divider>

                    <v-list density="compact" nav>
                        <v-list-item nuxt to="/" prepend-icon="mdi-home" title="Overview" value="overview" class="rounded-3xl" :class="{isHovering: 'px-4'}"></v-list-item>
                        <v-list-item nuxt to="/account/campaigns" prepend-icon="mdi-bullhorn" title="Campaigns" value="campaigns" class="rounded-3xl" :class="{isHovering: 'px-4'}"></v-list-item>
                        <v-list-item nuxt to="/account/briefs" prepend-icon="mdi-chess-pawn" title="Briefs" value="Briefs" class="rounded-3xl" :class="{isHovering: 'px-4'}"></v-list-item>
                    </v-list>
                </v-navigation-drawer>
                <v-app-bar class="bg-ak-black text-white pr-4">
                  <div class="flex w-full justify-end items-center mr-2">
                    <v-text-field placeholder="Search" variant="outlined" density="compact" hide-details rounded prepend-inner-icon="mdi-magnify" class="max-w-xl"></v-text-field>
                  </div>
                  <template v-slot:append>
                      <v-btn icon="mdi-cog" class="cursor-pointer"></v-btn>
                      <v-btn icon="mdi-account-circle" class="cursor-pointer"></v-btn>
                      <v-btn icon="mdi-help-circle" class="cursor-pointer"></v-btn>
                    </template>
                </v-app-bar>
              </template>
            </v-hover>
            <v-main scrollable>
              <div class="h-full w-full">
                <div class="h-full bg-ak-grey">
                  <slot />
                </div>
              </div>
            </v-main>
        </v-layout>
    </v-app>
</template>