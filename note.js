var requeteHTTP = new XMLHttpRequest();
requeteHTTP.open('GET', 'https://github.com/HB0N0/AvataaarsJs/blob/main/README.md');
requeteHTTP.onreadystatechange = function() {
    var scrappingTr = document.querySelectorAll("tr");
        scrappingTd = scrappingTr.forEach(
            querySelector("td::firstchild")
        );
        scrappingTd.forEach(
            querySelector("code")
        );
        scrappingTd2 = scrappingTr.forEach(
            querySelector("td::fourthchild")
        );
        scrappingTd2.forEach(
            querySelector("code")
        );
};
requeteHTTP.send();