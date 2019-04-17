const FollowToggle = require ("./follow_toggle.js");

$( () => {
    $(".follow-toggle").each((index, ele) => {
        let toggle = new FollowToggle($(ele));
    })
})
