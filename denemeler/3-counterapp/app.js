const app = Vue.createApp({
    data(){
        return{
            count: 0,  
            count2: 0,

        };
    },

    methods: {
        // getcounterResult(){
        //     console.log("Counter 1 çalıştı")
        //     return this.count > 5 ? 'büyük' : 'küçük' 
        // },

        // getcounter2Result(){
        //     console.log("Counter 2 çalıştı")
        //     return this.count2 > 5 ? 'büyük' : 'küçük' 
        // }
        
    },
    computed: {
        //Benim template ile vue arasında bilgileri getiren virtualdom adında bir işlevim var. Bu işlev doma yani template'e bütün değişiklikleri
        //yansıtır. Fakat benim bazı değişiklikleri kontrol altına almam gerek. Vue'nin bütün işlemlerinde yukardaki gibi konsolun sadece birini
        //çalıştırmak istiyor olabilirim. İşte burda devreye computedlar girmektedir.
        //computed bir fonksiyon gibi çalışan değişkenlerdir. Computed'ın değerini okuyabiliriz, şu an set edemeyiz, fakat getter setter ayarlanır
        //Reactive olarak değişken gibi davranan method gibi tanımlanan yapılardır. Üstte yer alanları kopyaladık
        //değişken gibi davranır ve geriye bir değer return etmesi gerekir.
        //aşağıdaki örnekte her bir arkadaş için computed, ilgili yeri update etti. Mesela counter'da bir değişiklik var mı ? var, tetiklen
        //yoksa tetiklenme. İçinde this ile başlayan referans edilmiş arkadaşlardan bir tanesinin değişmiş olması bile yeterli

        getcounterResult(){
            console.log("Counter 1 çalıştı")
            return this.count > 5 ? 'büyük' : 'küçük' 
        },

        getcounter2Result(){
            console.log("Counter 2 çalıştı")
            return this.count2 > 5 ? 'büyük' : 'küçük' 
        }
    },

    watch: {
        //datada computedda bulunan bir bilgiyi, direk izleyebilmemizi sağlar. Mesela counte'ı ismiyle yazdım incelemeye başladım.
        // new ve oldvalue altında 2 bilgi veriyor. Eski bilgisini ve yeni bilgisini net olarak veriyor.

        count(newValue, oldValue){
            console.log("Count", oldValue, "=>", newValue);
        },

        getcounterResult(newValue, oldValue){
            console.log("Result", oldValue, "=>", newValue);

        },

       


    }





}).mount("#app");