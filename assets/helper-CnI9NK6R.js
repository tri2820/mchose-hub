import{G as s,v as w}from"./theme-DWo_PKw5.js";const t=e=>w.global.t(e),o=()=>`
<ul class="w-flex w-flex-col w-gap-[10px] w-p-6 w-w-[392px]">
  <li class="w-flex w-items-start w-gap-2">
    <i class="iconfont icon-keyboard_linear w-text-font24"></i>
    <div class="w-flex w-flex-col w-gap-1">
      <p class="w-text-font13 w-font-semibold w-text-w1">${t("connectDevice.keyboardSleepStatus")}</p>
      <p class="w-text-font12 w-text-w2">${t("connectDevice.keyboardSleepStatusTips")}</p>
    </div>
  </li>
  <li class="w-flex w-items-start w-gap-2">
    <i class="iconfont icon-usb_linear w-text-font24"></i>
    <div class="w-flex w-flex-col w-gap-1">
      <p class="w-text-font13 w-font-semibold w-text-w1">${t("connectDevice.needLinkUSB")}</p>
      <p class="w-text-font12 w-text-w2">${t("connectDevice.needLinkUSBTips").replace(/\n/g,"")}</p>
    </div>
  </li>
  <li class="w-flex w-items-start w-gap-2">
    <i class="iconfont icon-wifi_linear w-text-font24"></i>
    <div class="w-flex w-flex-col w-gap-1">
      <p class="w-text-font13 w-font-semibold w-text-w1">${t("connectDevice.needLinkWireless")}</p>
      <p class="w-text-font12 w-text-w2">${t("connectDevice.needLinkWirelessMouseTips")}</p>
    </div>
  </li>
</ul>
`,a=()=>`
<ul class="w-flex w-flex-col w-gap-[10px] w-p-6 w-w-[392px]">
  <li class="w-flex w-items-start w-gap-2">
    <i class="iconfont icon-mouse_linear w-text-font24"></i>
    <div class="w-flex w-flex-col w-gap-1">
      <p class="w-text-font13 w-font-semibold w-text-w1">${t("connectDevice.mouseSleepStatus")}</p>
      <p class="w-text-font12 w-text-w2">${t("connectDevice.mouseSleepStatusTips")}</p>
    </div>
  </li>
  <li class="w-flex w-items-start w-gap-2">
    <i class="iconfont icon-usb_linear w-text-font24"></i>
    <div class="w-flex w-flex-col w-gap-1">
      <p class="w-text-font13 w-font-semibold w-text-w1">${t("connectDevice.needLinkUSB")}</p>
      <p class="w-text-font12 w-text-w2">${t("connectDevice.needLinkUSBTips").replace(/\n/g,"")}</p>
    </div>
  </li>
  <li class="w-flex w-items-start w-gap-2">
    <i class="iconfont icon-wifi_linear w-text-font24"></i>
    <div class="w-flex w-flex-col w-gap-1">
      <p class="w-text-font13 w-font-semibold w-text-w1">${t("connectDevice.needLinkWireless")}</p>
      <p class="w-text-font12 w-text-w2">${t("connectDevice.needLinkWirelessMouseTips")}</p>
    </div>
  </li>
</ul>
`,p=()=>`
<ul class="w-flex w-flex-col w-gap-[10px] w-p-6 w-w-[368px]">
  <li class="w-flex w-items-start w-gap-2">
    <i class="iconfont icon-headphones_linear w-text-font24"></i>
    <div class="w-flex w-flex-col w-gap-1">
      <p class="w-text-font13 w-font-semibold w-text-w1">${t("connectDevice.headsetSleepStatus")}</p>
      <p class="w-text-font12 w-text-w2">${t("connectDevice.headsetSleepStatusTips")}</p>
    </div>
  </li>
  <li class="w-flex w-items-start w-gap-2">
    <i class="iconfont icon-wifi_linear w-text-font24"></i>
    <div class="w-flex w-flex-col w-gap-1">
      <p class="w-text-font13 w-font-semibold w-text-w1">${t("connectDevice.headsetOnly24G")}</p>
      <p class="w-text-font12 w-text-w2">${t("connectDevice.headsetOnly24GTips")}</p>
    </div>
  </li>
</ul>
`,f=()=>`
<div class="w-p-6">
  <p class="w-text-font13 w-text-w1">${t("connectDevice.A5UltraNeedRouse")}</p>
</div>
`,x=()=>`
<div class="w-p-6">
  <p class="w-text-font13 w-text-w1">${t("connectDevice.k7MouseNeedRouse")}</p>
</div>
`;function d(e){return e.deviceType===s.KEYBOARD?o():e.deviceType===s.MOUSE?e.A5UltraLengthTwo===2?f():e.k7LengthTwo===2?x():a():e.deviceType===s.HEADSET?p():null}function v(e){const n=!!(e.isSleepElectron||e.connectMode==null||e.batteryLevel==="breakConnect"||e.deviceType===s.MOUSE&&(e.A5UltraLengthTwo===2||e.k7LengthTwo===2)),l=!!(e.connectMode==null||e.isBusy),c=(e.failedCount||0)>0,i=d(e);return{isInvalid:n,isLoading:l,isRetrying:c,isDisabled:n||l,helperLang:i}}export{d as g,v as t};
