<template>
    <div class="app">
        <div class="block-a-propos shadow-7">
            <h5 class="shadow-8">A propos</h5>

            <!-- COPIE SUR CORTEIZ, A CHANGER -->
            <h6>INFO GÉNÉRALE</h6>
            <q-list padding bordered class="rounded-borders">
            <q-expansion-item
                dense
                dense-toggle
                expand-separator
                label="LES PRODUITS VENDUS SUR LE SITE SONT-ILS AUTHENTIQUES ?"
            >
                <q-card>
                <q-card-section>
                    Les produits vendus sur notre site ne sont pas authentiques car ils ne sont pas fabriqués dans l'usine officielle.
                </q-card-section>
                </q-card>
            </q-expansion-item>

            <q-expansion-item
                dense
                dense-toggle
                expand-separator
                label="LES TAILLES SONT-ELLES HOMMES OU FEMMES?"
            >
                <q-card>
                <q-card-section>
                    Les produits vendus sur Corteiz.co sont généralement unisexes.
                </q-card-section>
                </q-card>
            </q-expansion-item>

            <q-expansion-item
                dense
                dense-toggle
                expand-separator
                label="FAITES-VOUS DES « RESTOCK »?"
            >
                <q-card>
                <q-card-section>
                    Oui, le réapprovisionnement est possible, mais il dépend de la disponibilité des produits.
                </q-card-section>
                </q-card>
            </q-expansion-item>
            </q-list>


            <h6>COMMANDE ET PAIEMENT</h6>

            <q-list padding bordered class="rounded-borders">
            <q-expansion-item
                dense
                dense-toggle
                expand-separator
                label="LE PAIEMENT EST-IL SÉCURISÉ?"
            >
                <q-card>
                <q-card-section>
                    Notre site fait appel à la technologie SSL pour sécuriser vos informations. Par ailleurs, lorsque vous envoyez un paiement, le destinataire ne reçoit aucune donnée financière vous concernant telle que votre numéro de compte ou de carte de crédit.
                </q-card-section>
                </q-card>
            </q-expansion-item>

            <q-expansion-item
                dense
                dense-toggle
                expand-separator
                label="POURQUOI MON PAIEMENT ÉCHOUE?"
            >
                <q-card>
                <q-card-section>
                    Les motifs de refus d’un paiement peuvent être divers (montant disponible sur le compte insuffisant, carte expirée, problème technique dans la transmission des informations, etc.). Il est préférable que le nom indiqué sur l’adresse de livraison soit identique à celui de la carte utilisé pour le paiement.   Si, après plusieurs tentatives de paiement, celui-ci n’est toujours pas validé. Nous vous invitons à suivre cette alternative: Cliquez-ici
                </q-card-section>
                </q-card>
            </q-expansion-item>

            <q-expansion-item
                dense
                dense-toggle
                expand-separator
                label="POURQUOI LE PRÉLÈVEMENT NE CORRESPONDENT PAS AU MONTANT DE MA COMMANDE?"
            >
                <q-card>
                <q-card-section>
                    Des frais bancaire peuvent être appliqués selon votre banque. (3,73% généralement) *Si le montant des frais est supérieur à 7,00 euros. Veuillez nous contacter
                </q-card-section>
                </q-card>
            </q-expansion-item>

            <q-expansion-item
                dense
                dense-toggle
                expand-separator
                label="COMMENT ANNULER UNE COMMANDE?"
            >
                <q-card>
                <q-card-section>
                    Toute annulation après validation du paiement fait l'objet d'une demande d'autorisation de remboursement auprès de Corteiz. Veuillez contacter le service clientèle dans les plus brefs délais après la validation de votre commande. Les remboursements peuvent prendre plusieurs semaines avant d'apparaître sur votre relevé de compte.
                </q-card-section>
                </q-card>
            </q-expansion-item>

            <q-expansion-item
                dense
                dense-toggle
                expand-separator
                label="JE SOUHAITE RETOURNER OU ÉCHANGER MON PRODUIT, COMMENT FAIRE?"
            >
                <q-card>
                <q-card-section>
                    Toutes les ventes de Corteiz.co sont définitives. Nous ne sommes pas en mesure de procéder à des retours ou à des échanges. Les remboursements sont effectués UNIQUEMENT en cas d'erreur d'exécution, par exemple en cas d'erreur d'expédition ou d'article manquant. En cas de problème, veuillez contacter notre service clientèle : support@corteiz.co
                </q-card-section>
                </q-card>
            </q-expansion-item>
            </q-list>


            <h6>LIVRAISON</h6>

            <q-list padding bordered class="rounded-borders">
            <q-expansion-item
                dense
                dense-toggle
                expand-separator
                label="DANS QUEL PAYS LA LIVRAISON EST-ELLE DISPONIBLE?"
            >
                <q-card>
                <q-card-section>
                    Les livraisons sont effectuées partout dans le monde.
                </q-card-section>
                </q-card>
            </q-expansion-item>

            <q-expansion-item
                dense
                dense-toggle
                expand-separator
                label="A COMBIEN S’ÉLÈVENT LES FRAIS DE PORT?"
            >
                <q-card>
                <q-card-section>
                    8€ pour la livraison Express DHL (ou autres transporteurs)
                </q-card-section>
                </q-card>
            </q-expansion-item>

            <q-expansion-item
                dense
                dense-toggle
                expand-separator
                label="QUELS SONT LES DÉLAIS DE LIVRAISON?"
            >
                <q-card>
                <q-card-section>
                    Livraison express 5-8 jours ouvrés via Colissimo (La poste) ou DHL Express. COVID: En raison des circonstances actuelles, veuillez compter un possible délai supplémentaire variant de 3-7 jours pour les livraisons.
                </q-card-section>
                </q-card>
            </q-expansion-item>

            <q-expansion-item
                dense
                dense-toggle
                expand-separator
                label="JE N’AI PAS REÇU MON COLIS, COMMENT FAIRE?"
            >
                <q-card>
                <q-card-section>
                    Si vous n’avez toujours pas reçu votre commande, c’est que votre paquet est certainement encore en cours d’acheminement et devrait arriver chez vous très prochainement. On vous demande de bien vérifier aussi la date d’estimation. Et si la date d’estimation est dépassée, il est parfois possible que le réseau national soit plus chargé que d’habitude. Nous restons dépendants sur la partie livraison des transporteurs tels que La Poste, Chronopost ou DHL. Nous avons choisi ces transporteurs car ils sont fiables dans l’ensemble, mais parfois, certains peuvent se révéler un peu plus longs ou moins réactifs que d’habitude. On vous prie aussi de vérifier que l’adresse présente dans le récapitulatif de votre commande est bonne, complète, bien orthographiée et que votre nom est bien visible sur la boîte aux lettres et que celle-ci est accessible. Il se peut qu’un manque d’information puisse retarder votre colis.   Si votre adresse de livraison est correcte et que le délai de livraison est dépassé, n’hésitez pas à nous contacter via notre formulaire en ligne, notre équipe est là pour vous aider !
                </q-card-section>
                </q-card>
            </q-expansion-item>

            <q-expansion-item
                dense
                dense-toggle
                expand-separator
                label="POURQUOI AI-JE REÇU UN SEUL PRODUIT ALORS QUE J'EN AI COMMANDÉ PLUSIEURS?"
            >
                <q-card>
                <q-card-section>
                    Il se peut que vous receviez votre commande en plusieurs colis en raison de la disponibilité des produits dans nos différents entrepôts, afin de vous permettre de recevoir rapidement les articles disponibles tout en évitant les retards causés par les ruptures de stock.
                </q-card-section>
                </q-card>
            </q-expansion-item>
            </q-list>
        </div>
        <br><br>
    </div>
</template>
<script>

</script>

<style scoped>
  @import url(https://fonts.googleapis.com/earlyaccess/thabit.css);
.app{
}
.block-a-propos {
    margin-left: 5%;
    margin-right: 5%;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-family: Thabit;
    padding-bottom: 150px;
}

.block-a-propos h5 {
    padding-top: 20px;
    background-color: #b38a58;
    color: #fff;
    min-height: 90px;
}

.block-a-propos p {
    margin-left: 15%;
    margin-right: 15%;
    font-size: 16px;
}

.block-a-propos b {
    text-decoration: underline;
    font-size: 18px;
}

</style>