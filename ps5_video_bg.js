// Adds a video background
// Source: https://github.com/christian45410/UnraidThemes/raw/e596a3694b0f962908a7f2496ae7de1bad3b29d7/ps5_dynamic.mp4

let video = `
<div class="background-wrap"><video id="video-bg-elem" preload="auto" autoplay="true" loop="loop" muted="muted"> <source src="https:\/\/github.com\/christian45410\/UnraidThemes\/raw\/e596a3694b0f962908a7f2496ae7de1bad3b29d7\/ps5_dynamic.mp4" type="video\/mp4">Video not supported</video></div>
`
document.body.innerHTML += video