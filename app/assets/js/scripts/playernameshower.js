// Récupére les packages nécessaires

const mcs = require('node-mcstatus');
const { DistroAPI } = require('helios-core/common')
const ConfigManager = require('./configmanager')

async function GetPlayersNames(){
try {
    // Définit l'url de la distribution
    const server = (await DistroAPI.getDistribution()).getServerById(ConfigManager.getSelectedServer())

    // Récupère les informations du serveur
    const status = await mcs.getStatus(server.host, { port: server.port })

    // Récupère le nom des joueurs connectés
    const playersname = status.players.list.name_clean

    // Renvoie le nom des joueurs connectés
    return playersname
} catch (error) {
    // Gère les erreurs
    console.error('Une erreur s\'est produite:', error)
    // Renvoie une valeur par défaut ou une indication d'erreur
    return 'Erreur lors de la récupération des joueurs connectés'
}
}