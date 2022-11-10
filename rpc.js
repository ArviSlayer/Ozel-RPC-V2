const rpc = require('discord-rpc');//ArviS#0011
//ArviS#0011
const config = {
	appId: "XXXXXXXXXXXXXXXXXXX", // Bot (Application) ID'sini yazacaksınız
//ArviS#0011
	details: "❤️・Software", // Başlığın altında gözüken ince fontlu yazı kısmı
//ArviS#0011
	largeImageKeyName: "arvislogo", // Rich Presence kısmına koyduğunuz fotoğrafın adını yazın
	largeImageText: "ArviS#0011 Tarafından Yapıldı", // Mouse imceli üstüne getirilince gözükecek yazı kısmı
//ArviS#0011
	smallImageKeyName: "bluetik", // Rich Presence kısmına koyduğunuz fotoğrafın adını yazın
	smallImageText: "Discorder", // Mouse imceli üstüne getirilince gözükecek yazı kısmı
//ArviS#0011
	buttonOneName: "Discord", // 1. Buton ismi
	buttonOneUrl: "https://discord.gg/Cwj4GDPGTW", // 1. Buton URL'si
//ArviS#0011
	buttonTwoName: "İnstagram", // 2. Buton İsmi
	buttonTwoUrl: "https://www.instagram.com/arvis_here/" // 2. Buton URL'si
};//ArviS#0011
//ArviS#0011
register(config.appId);//ArviS#0011
const client = new rpc.Client({transport: ''});//ArviS#0011
//ArviS#0011//ArviS#0011
client.on('ready', () => {
	console.log(`ArviS#0011 - Discord Özel RPC V2 => RPC'niz Hazır, iyi Günlerde Kullanın`);//ArviS#0011
	client.setActivity({//ArviS#0011
		details: config.details,//ArviS#0011
		largeImageKey: config.largeImageKeyName,//ArviS#0011
		largeImageText: config.largeImageText,//ArviS#0011
		smallImageKey: config.smallImageKeyName,////ArviS#0011ArviS#0011
		smallImageText: config.smallImageText,//ArviS#0011
		buttons: [
			{//ArviS#0011
				label: config.buttonOne,//ArviS#0011
				url: config.buttonOneUrl//ArviS#0011
			},//ArviS#0011
			{//ArviS#0011
				label: config.buttonTwoName,//ArviS#0011
				url: config.buttonTwoUrl//ArviS#0011
			}
		]//ArviS#0011
	});//ArviS#0011
});//ArviS#0011
//ArviS#0011
const clientId = config.appId//ArviS#0011
client.login({ clientId });//ArviS#0011

//ArviS#0011
//ArviS#0011//ArviS#0011//ArviS#0011









































//ArviS#0011