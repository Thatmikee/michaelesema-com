#!/bin/bash
# Builds the page backgrounds for portfolio-v2.html. Each page gets a sharp
# background and a blurred copy; the glass panels in the HTML use the blurred
# copy, positioned to line up with the sharp one, so the frosted effect is baked
# into plain images and the text stays vector in the PDF.
cd "$(dirname "$0")" || exit 1
mkdir -p bg
W=1123
H=794

mesh() { # name base c1 c2 c3
  magick -size ${W}x${H} xc:"$2" \
    -fill "$3" -draw "circle 160,120 160,520" \
    -fill "$4" -draw "circle 960,640 960,1060" \
    -fill "$5" -draw "circle 640,-40 640,300" \
    -blur 0x120 \
    -fill "$3" -draw "circle 930,170 930,290" \
    -fill "$4" -draw "circle 210,640 210,730" \
    -fill "$5" -draw "circle 560,420 560,470" \
    -attenuate 0.10 +noise Gaussian -quality 82 "bg/$1.jpg"
  magick "bg/$1.jpg" -resize 50% -blur 0x13 -quality 70 "bg/$1-blur.jpg"
}

photo() { # name file
  magick "$2" -resize ${W}x${H}^ -gravity center -extent ${W}x${H} -quality 85 "bg/$1.jpg"
  magick "bg/$1.jpg" -resize 50% -blur 0x13 -quality 70 "bg/$1-blur.jpg"
}

mesh cover   '#0f3d2e' '#E86B42' '#3C559D' '#dfeadb'
mesh why     '#10231b' '#E86B42' '#3C559D' '#EC2D93'
mesh sig     '#111318' '#D8001F' '#4A4F58' '#D8001F'
mesh my      '#111318' '#3C559D' '#D8001F' '#4A4F58'
mesh how     '#0f3d2e' '#3C559D' '#E86B42' '#dfeadb'
mesh contact '#0f3d2e' '#E86B42' '#dfeadb' '#3C559D'
photo sb ../public/work/sarahbellus-scene.jpg
photo sp ../public/work/sp-board.jpg
photo bh ../public/work/bshive-merch.jpg
ls bg
