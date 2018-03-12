(function () {

	$(document).ready(function () {
		console.log("fixer works");
        
        var wiki = $('a.my-page').parent().clone();
        wiki.find('a').attr('class', 'wiki no_line');
        wiki.find('span').text('Wiki');
        wiki.appendTo('ul.cm-menu-header');
        
        //все вики ссылки на общую
        $('a.wiki').attr('href', '/projects/sys-1/wiki/index');
        
        var li = $("ul.cm-menu-header li").first().clone();
        $(li).find('a').text('Issues').prop('class', 'issues no_line').prop('href', '/issues');
		$(li).insertAfter($("ul.cm-menu-header li a.projects").parent());
        
        //ссылка из проектов по умолчанию - на задачи
		if (window.location.pathname == '/projects' && window.location.search == '') {
			//.my-project
			$("ul.projects a.project").each(function () {
				var href = $(this).attr("href");
				$(this).attr("href", href + '/issues');
			});
		}
	});

})();
