module UrlFixerPlugin
  module Hooks
    class LayoutHook < Redmine::Hook::ViewListener
	
      def view_layouts_base_html_head(context={})
        <<-TAGS
          #{javascript_include_tag 'url_fixer', :plugin => 'redmine_urls_fixer'}
        TAGS
      end

    end
  end
end
