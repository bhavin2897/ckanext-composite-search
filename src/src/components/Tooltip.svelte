
<div class="tooltip-wrapper">
  <div class="tooltip">
    <slot name="tooltip"/>
  </div>
  <slot name="content"/>
</div>

<style>
  .tooltip-wrapper {
    position: relative;
    display: inline-block;
  }
  .tooltip {
    position: absolute;
    background: rgba(0,0,0,0.9);
    border-radius: 10px;
    padding: 20px;
    width: 200px;
    min-height: 100px;
    color: #fff;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    display: flex;
    align-items: center;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: none;
  }
  .tooltip-wrapper:hover .tooltip {
    display: flex;
  }
  .tooltip:after {
    content: ' ';
    display: block;
    border: 5px solid transparent;
    border-top-color: rgba(0,0,0,0.9);
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 100%);
  }
</style>
