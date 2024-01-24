<template>
    <v-app>
        <v-layout>
            <v-navigation-drawer permanent>
                <v-list nav>
                    <v-menu :location="'end'" class="ml-4" :offset="15">
                        <template v-slot:activator="{ props }">
                            <v-list-item v-bind="props" prepend-icon="mdi-account-circle" title="Sam Brown" subtitle="samraymondbrown@googlemail.com" value="accountName"></v-list-item>
                        </template>
                        <v-list density="compact" nav>
                            <v-list-item prepend-icon="mdi-cog" title="Edit Profile" value="editProfile"></v-list-item>
                            <v-list-item prepend-icon="mdi-help-circle" title="Help" value="help"></v-list-item>
                            <v-list-item prepend-icon="mdi-logout" title="Logout" value="logout"></v-list-item>
                        </v-list>
                    </v-menu>
                </v-list>
                <v-divider></v-divider>

                <v-list density="compact" nav>
                    <v-list-item nuxt to="/" prepend-icon="mdi-home" title="Overview" value="overview"></v-list-item>
                    <v-list-item nuxt to="/account-name/campaigns" prepend-icon="mdi-bullhorn" title="Campaigns" value="campaigns"></v-list-item>
                    <v-list-item nuxt to="/account-name/briefs" prepend-icon="mdi-chess-pawn" title="Briefs" value="Briefs"></v-list-item>
                </v-list>
            </v-navigation-drawer>
            <v-main>
                <slot />
            </v-main>
        </v-layout>
    </v-app>
</template>