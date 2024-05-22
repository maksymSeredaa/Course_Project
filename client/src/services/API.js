import axios from 'axios';

export async function getRandomText() {
    // try {
    //     // Using a CORS proxy
    //     const url = 'https://www.randomtext.me/api/lorem/p-5/5-15';
    //     const proxyUrl = `https://cors-anywhere.herokuapp.com/${url}`;

    //     const response = await axios.get(proxyUrl, {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'X-Requested-With': 'XMLHttpRequest'
    //         }
    //     });
    //     console.log(response.data.text_out);
    // } catch (error) {
    //     console.error('Error fetching random text:', error);
    // }
    "- Факт залишається фактом: рівень потреб населення країни дуже низький, - говорить директор соціальних програм Центру Разумкова Людмила Шангина. - Відповідаючи на питання, який рівень доходів він вважає достатнім, середньостатистичний українець називає суму лише в 3-4 рази що перевищує нинішній прожитковий мінімум, який, як відомо, дуже занижений. Природно, в нашому суспільстві є люди з високим рівнем потреб, але більшість готова задовольнятися малою"
}

getRandomText();
