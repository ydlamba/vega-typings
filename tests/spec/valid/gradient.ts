import { Spec } from 'vega';

const spec: Spec = {
  "$schema": "https://vega.github.io/schema/vega/v3.json",
  "width": 300,
  "height": 15,
  "padding": 5,

  "scales": [
    {
      "name": "color",
      "type": "sequential",
      "range": {"scheme": "viridis"},
      "domain": [0, 100]
    }
  ],

  "marks": [
    {
      "type": "rect",
      "encode": {
        "update": {
          "width": {"signal": "width"},
          "height": {"signal": "height"},
          "fill": {"gradient": "color"}
        }
      }
    }
  ]
}
