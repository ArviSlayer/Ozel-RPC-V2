client.login({ clientId: ayarlar.ClientID }).catch(console.error);

client.on('ready', () => {
    console.log('[RPC] Aktif')
    console.log(`[UYARI] Konsolu sakın kapatmayın, RPC'nin çalışması için açık kalması lazım.`)
    console.log('=================== Made by ❤️ ArviS#0011 ===================')


    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: ayarlar.Detaylar,
            state: ayarlar.AltYazı,
            //timestamps: {start: Date.now()}, //Zaman Sayacı [İsteğe Bağlı Açılabilir]

            buttons: [{
                    label: ayarlar.Buton1,
                    url: ayarlar.URL1
                },
                {
                    label: ayarlar.Buton2,
                    url: ayarlar.URL2
                },


            ]
        }
    })
})
