(function($) {
    "use strict";


    /*==================================================================
    [ Validate ]*/
    var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var subject = $('.validate-input input[name="subject"]');
    var message = $('.validate-input textarea[name="message"]');


    $('.validate-form').on('submit', function(e) {
        var check = true;

        if ($(name).val().trim() == '') {
            showValidate(name);
            check = false;
        }

        if ($(subject).val().trim() == '') {
            showValidate(subject);
            check = false;
        }


        if ($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check = false;
        }

        if ($(message).val().trim() == '') {
            showValidate(message);
            check = false;
        }
        if (!check)
            return false;

        e.preventDefault();

        $.ajax({

            url: "https://script.google.com/macros/s/AKfycbxcfqyVXQ3UrPAGbSH03cT3tKt95hLT9SH0Oc-Sg1GbSJ8EYxPllel-bQ/exec",
            method: "POST",
            dataType: "json",
            data: $(".contact_form").serialize(),
            success: function(response) {

                if (response.result == "success") {
                    $('.contact_form')[0].reset();
                    alert('Thank you for contacting me.');
                    return true;
                } else {
                    alert("Something went wrong. Please try again.")
                }
            },
            error: function() {

                alert("Something went wrong. Please try again.")
            }
        })
    });


    $('.validate-form .input1').each(function() {
        $(this).focus(function() {
            hideValidate(this);
        });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }


})(jQuery);

const app = function() {
    const API_BASE = 'https://script.google.com/macros/s/AKfycbxcfqyVXQ3UrPAGbSH03cT3tKt95hLT9SH0Oc-Sg1GbSJ8EYxPllel-bQ/exec';
    const API_KEY = 'abcdef';
    const CATEGORIES = ['general', 'financial', 'technology', 'marketing'];

    const state = { activePage: 1, activeCategory: null };
    const page = {};

    function init() {
        page.notice = document.getElementById('notice');
        page.filter = document.getElementById('filter');
        page.container = document.getElementById('container');

        _buildFilter();
        _getNewPosts();
    }

    function _getNewPosts() {
        page.container.innerHTML = '';
        _getPosts();
    }

    function _getPosts() {
        _setNotice('Loading posts');

        fetch(_buildApiUrl(state.activePage, state.activeCategory))
            .then((response) => response.json())
            .then((json) => {
                if (json.status !== 'success') {
                    _setNotice(json.message);
                }

                _renderPosts(json.data);
                _renderPostsPagination(json.pages);
            })
            .catch((error) => {
                _setNotice('Unexpected error loading posts');
            })
    }

    function _buildFilter() {
        page.filter.appendChild(_buildFilterLink('no filter', true));

        CATEGORIES.forEach(function(category) {
            page.filter.appendChild(_buildFilterLink(category, false));
        });
    }

    function _buildFilterLink(label, isSelected) {
        const link = document.createElement('button');
        link.innerHTML = _capitalize(label);
        link.classList = isSelected ? 'selected' : '';
        link.onclick = function(event) {
            let category = label === 'no filter' ? null : label.toLowerCase();

            _resetActivePage();
            _setActiveCategory(category);
            _getNewPosts();
        };

        return link;
    }

    function _buildApiUrl(page, category) {
        let url = API_BASE;
        url += '?key=' + API_KEY;
        url += '&page=' + page;
        url += category !== null ? '&category=' + category : '';

        return url;
    }

    function _setNotice(label) {
        page.notice.innerHTML = label;
    }

    function _renderPosts(posts) {
        posts.forEach(function(post) {
            const article = document.createElement('article');
            article.innerHTML = `
				<h2>${post.title}</h2>
				<div class="article-details">
					<div>By ${post.author} on ${_formatDate(post.timestamp)}</div>
					<div>Posted in ${post.category}</div>
				</div>
				${_formatContent(post.content)}
			`;
            page.container.appendChild(article);
        });
    }

    function _renderPostsPagination(pages) {
        if (pages.next) {
            const link = document.createElement('button');
            link.innerHTML = 'Load more posts';
            link.onclick = function(event) {
                _incrementActivePage();
                _getPosts();
            };

            page.notice.innerHTML = '';
            page.notice.appendChild(link);
        } else {
            _setNotice('No more posts to display');
        }
    }

    function _formatDate(string) {
        return new Date(string).toLocaleDateString('en-GB');
    }

    function _formatContent(string) {
        return string.split('\n')
            .filter((str) => str !== '')
            .map((str) => `<p>${str}</p>`)
            .join('');
    }

    function _capitalize(label) {
        return label.slice(0, 1).toUpperCase() + label.slice(1).toLowerCase();
    }

    function _resetActivePage() {
        state.activePage = 1;
    }

    function _incrementActivePage() {
        state.activePage += 1;
    }

    function _setActiveCategory(category) {
        state.activeCategory = category;

        const label = category === null ? 'no filter' : category;
        Array.from(page.filter.children).forEach(function(element) {
            element.classList = label === element.innerHTML.toLowerCase() ? 'selected' : '';
        });
    }

    return {
        init: init
    };
}();