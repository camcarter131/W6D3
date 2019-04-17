const APIUtil = require ("./api_util.js");

class FollowToggle {
    constructor($el) {
        this.$el = $el;
        this.userId = $el.data("user-id");
        this.followState = $el.data("initial-follow-state");
        this.render();
        this.handleClick();
    }

    render() {
        if (this.followState === "unfollowed") {
            this.$el.text("Follow!");
        } else {
            this.$el.text("Unfollow!");
        }
    }

    handleClick() {
        let toggleState = function(obj) {
            debugger;
        }
        this.$el.click((event) => {
            event.preventDefault();
            let method;
            if (this.followState === 'followed') {
                APIUtil.unfollowUser(this.userId).then(toggleState);
            } else {
                APIUtil.followUser(this.userId).then(toggleState);
            }
        })
    }

}

module.exports = FollowToggle;