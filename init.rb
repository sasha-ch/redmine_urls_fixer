Redmine::Plugin.register :redmine_urls_fixer do
  name 'Menus fixer'
  author 'sasha-ch'
  description 'Fix some menu hrefs to better one'
  version '0.0.1'
  url 'http://example.com/path/to/plugin'
  author_url 'https://github.com/sasha-ch'

end


require_dependency 'url_hook'