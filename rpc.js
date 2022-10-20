const rpc = require('discord-rpc');

const config = {
	appId: "XXXXXXXX", // Bot (Application) ID'sini yazacaksınız

	details: "ArviS#0011", // Başlığın altında gözüken ince fontlu yazı kısmı

	largeImageKeyName: "arvis", // Rich Presence kısmına koyduğunuz fotoğrafın adını yazın
	largeImageText: "ArviS", // Mouse imceli üstüne getirilince gözükecek yazı kısmı

	smallImageKeyName: "mavitik", // Rich Presence kısmına koyduğunuz fotoğrafın adını yazın
	smallImageText: "Onaylı", // Mouse imceli üstüne getirilince gözükecek yazı kısmı

	buttonOneName: "Discord", // 1. Buton ismi
	buttonOneUrl: "https://discord.gg/apQWPBKajs", // 1. Buton URL'si

	buttonTwoName: "İnstagram", // 2. Buton İsmi
	buttonTwoUrl: "https://www.instagram.com/arvis_here/" // 2. Buton URL'si
};

rpc.register(config.appId);
const client = new rpc.Client({transport: 'ipc'});

client.on('ready', () => {
	console.log('ArviS - Discord Özel RPC V2 => RPCniz Hazır, iyi Günlerde Kullanın.');
	client.setActivity({
		details: config.details,
		largeImageKey: config.largeImageKeyName,
		largeImageText: config.largeImageText,
		smallImageKey: config.smallImageKeyName,
		smallImageText: config.smallImageText,
		buttons: [
			{
				label: config.buttonOneName,
				url: config.buttonOneUrl
			},
			{
				label: config.buttonTwoName,
				url: config.buttonTwoUrl
			}
		]
	});
});

const clientId = config.appId
client.login({ clientId });









//ArviS#0011