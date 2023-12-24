<template>
    <span><p class="titre-footer" id="nous-suivre-id">Nous suivre sur</p></span>
    <div class="footer">
        <a href="">
            <img class="nous-suivre-img" src="https://www.pngmart.com/files/20/TikTok-Logo-PNG.png" alt="tiktok_logo">
        </a>
        <a href="https://www.instagram.com/fasl.studio/">
            <img class="nous-suivre-img" src="https://www.pngmart.com/files/13/Insta-Logo-PNG-Pic.png" alt="Instagram_logo">
        </a>
		<a href="mailto:mystery33700@gmail.com">
            <img class="nous-suivre-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEUAAAD///+rq6v09PSurq6RkZHv7+/8/Pz4+Pjk5OTDw8OlpaXq6ur19fWwsLC8vLzV1dVQUFDY2NiZmZkqKipZWVlgYGB9fX1BQUE1NTUjIyNmZmZLS0vd3d0UFBRtbW3MzMyJiYkyMjIbGxt2dnaBgYFFRUWMjIwdHR2enp47OzsLCwsmJiYeFoQ1AAAH/UlEQVR4nO2d2XriMAyFky5AW2gL3egO7XRl3v/5ZihQILF9JFmJST6d2ybFPyGOfCQrWWYymUwmk8lkMplMJpPJZDKZTCaTybT7ur44nXT2d1yD/uT0YiigG+718ybp8eSBg3f71Sy8hY4OL4l832fd1IMVqnt6RwE8TT3OKJ1Avpte6jFGav8+yDc7Tj1ABZ0GAMdNnGDKOvLejc+ph6alnuf52BrA/3Ii/kk9Kk11r8qA16kHpavuuAh429SnvE+D1wLhUeoRqet8G7DZgYxbFy2+CZfavBXb8aQvarQGPEw9lor055ew6dG2T/0V4EXqkVSm1UXcTz2QynTUvni0qEV8OsEHDk4Odk57B4Qw7GeteEmZZ85csXpiEa5M3pkfSPuR7h4iBTDP52uMM9KR+V5qooKIw56Hbo+0Q3cMkQg4j79fycumr9RUGyKvFP4/9MfUYwvBelLt0Qd9md3TD84PU5MtxQDM37Mp4+j8LTXbj1hR5n12wDk8v0lNl3HD6Cnriv/Xc2o+7lLvjUuYO2y6WsU1PU/YhPl1UsAb7nD3+IRuP7km8ddBEsLudzLAK/ZgRYR59z0RoMQSFBHmg9skgA+CoXoJu+FFY4daE6CpcTiC7rn/7CPsD4P/Le+QSgJU9R0G7I47LMIOeu70i4mPqvUC/LIrj6HmJ0RPnqN6EV/cV+hX1z7LMECYTQFinYAzcAXnBRh8QhTinoNRaQKC5N/PgkBAiILc2hA/AeDC2pYQooflpCZCYCUtF+YiQrR6PK4F8Dw8iJW5IiNEV7EORAD4a60ICZFtFyqx0hEoRFubnFJC9AlVI4KPP1gfKSZE9vlBaVA1Am5+v3JC6p1ehYDzu5VNiSBMh8iaymMIUT3RR0WAJ+GPnWwfHUX4RAoqtMUMqaIIaYGhsrhhcRxhdgeCe32n+C38geWlTSRhdglXoLoCK/CjJ3XC7G4Q/kxdpxgBOk6JJkROkKpTDHJ+TpsonhCaXaydR0EBY3TfafUpEELDslR5LBSwtntuL1ODEH63Ok7xA/iteL5IFUKE2NFIaQzDbnS5Rl2VEM1xnfIkztWLdEJTIkQ2at97IlF/xQ8lLULoFMddxW/s/FZOiALixxjAJ1BxHgrx9QgR4ih0LlBMgK9IiKJ++VWMuIK6hMylKVmj8L8FJVmqhAhRZqNSjdFaCJGNOhEAAu8eukHKhAiR7zEC3xBv0tYm1EaMBtQnRPMCYUwbAt8XpcxcnzB2ZtgUx/mtkVAPETi/tI0CVRAij5FacKuTTq+CEAYhNBtVKQqshlADUSvMrYjwEiCG+3DMhVZjs8SE2R1Y0CFEBEgeSGWEsLgxbIajombG7oCqCD/AEPM8ZKPi3R70tFZFhBjQ22kkoxU1kxGrISQVlg9ePGcDY3QpakKkEkLi1gCPSU2t+SWmtaogJO99GLgQ38m75mhXsQJCRmF5v+wxoorRDdFyPvqErK0BJacYZVy3ESk5H3VC5t6Hwn+cMfs4+CarCgkfuK0mtuJL5PyWB4R3BygTvoP0gkMbiyBUveJQH+4O0CVECSKn1oiSjkbwS1clROG2Rysblbp9fFsoCNckREsmrxaIwPzw6jG8kNIklLckmnuM8t6M4cWwImFMz6VTYrcHt4KIaoTIfgI3GTgbmLAhU0qNEFqIMRfpDC2oA8aiFiHBI5XOJIuZSGwOKxGCX9Gid4bsabDKWEkRdQhp6ZiZDHGy/BBhkkaFkJpvQrORU+tZRIaoQchIEPGDns2QRVQ6r0DISW2zw57t8gZJzieekJe7R7taCypa2wLEaEJuiQkquN3+vL/F0/mFJ7GE/PzJLX2N7Cr4YxcPRRJKEkTkDgHODgbsPR5xhLJyPaKV03N3oSBs39YjlJZcgr4FC3k7iTB3B8QQou4D/pUppc+WP63xAu7k7TMjCGNKn7EtHvLsWQXRckJUvh62MhFiOCkBJqstp1hMCO6lLqrPnwZPRylihLhho0oJ47eRhB40eEMY+gWtQwUh4RjcCZStQP5oiFKqgTYI/V5FGSGasGmpPV9ES9t7ijZ5rWZyEaHWljw34pR4NnGjnoTwk9AzhSaXM0HvFkqrSJEQKm6NLS+eOdWZpMI3PqHu9uYiIq/8lLLpmU8IAKl3kRuRB5hlX+HBTCSE6m0G3tZD6PM3RuMSVC5hBX0UZh8Lt/Vc1OgV2qi8bmZ9cs8Upp7kOxRRHxkeIVD1XWlcEqXlZIRpAGWIIsJ6ukO5JMj5SAjTAUoQBYSThIAw96VBWGOnPZdQc7p4wsSA/LTWG7Njea3tID3iJUSmlDLmDcDP1HgZq2wzn/sknP7RNfcs9YmV1nrgvP0hQWtdtzivMrzM7uiAKdoju0UvoO7M6HWCiVpcu0Wr8s8Xcz8x2EvWptwtaoXyfKVN68WfsNW8W0TEeX6KdNt6m8KkEwlx/8dppIR6Z9PDXdOUUj+3WCWA1m+N1tLRbduLctdaJSfa+CLZhVZlN/SHfsPU/Z2WQLVTY7U2rV/b+Z7OzRKRdk6nW6mxmNrsXdV2MfFT+54YxbIuwXuGdlylOJPlZjRAjuwWyNA1TM7sZpsQPVUe7Xk/tzdB2ZL3V3cDRTAvkn0Su6ZR2NTlWeC7KFimM5RuWtoNTSh2y3Nzf6ojahna/aSJQVzvmNMz/XZ63izIweSGbcm/Di+OH5uA2RudHT7E96A2mUwmk8lkMplMJpPJZDKZTCaTyWQyxeofi5ufjlAmZuYAAAAASUVORK5CYII=" alt="mail">
        </a>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                test: ""
            }
        }
    }
</script>

<style scoped>

</style>