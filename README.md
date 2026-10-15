# MCHOSE Hub (Offline Web Driver for Linux)

A fast, completely offline local mirror of the official MCHOSE (迈从科技) WebHID keyboard configuration suite (`mchose.com.cn` / `hub.mchose.com`).

Designed for Linux systems (NixOS, Arch, Debian/Ubuntu, Fedora) to configure MCHOSE keyboards (such as the **Ace 68 Air-II**, **GX87**, **G75**, **K99**, etc.) without depending on slow or unreliable overseas CDNs.

## Features

- **100% Offline & Fast:** All Next.js chunks, device layout manifests (`asset-manifest.json`), config files, and locales are hosted locally.
- **Patched URL Resolvers:** Eliminates CORS failures and CDN timeouts by redirecting all dynamic runtime calls to `127.0.0.1:18989`.
- **CORS-Enabled Server:** Built-in Python HTTP server (`serve.py`) supporting full CORS and automatic fallback handlers for missing optional assets.
- **Native WebHID:** Full access to RGB lighting, Rapid Trigger, key remapping, and macros over `/dev/hidraw*` in Chromium / Google Chrome.

## Quick Start

### 1. Set USB / hidraw Permissions

Give your user access to the keyboard's HID raw device (or install the udev rule):

```bash
# Example for Ace 68 Air-II (Vendor ID: 41e4, Product ID: 2120)
sudo chmod 0666 /dev/hidraw*
```

**Permanent udev rule (`/etc/udev/rules.d/99-mchose.rules` or NixOS `services.udev.extraRules`):**
```udev
KERNEL=="hidraw*", ATTRS{idVendor}=="41e4", ATTRS{idProduct}=="2120", MODE="0666", TAG+="uaccess"
```

### 2. Start the Local Server

```bash
python3 serve.py
```

The app will be available at: [http://127.0.0.1:18989/](http://127.0.0.1:18989/)

### 3. Open in Chromium / Chrome

Launch in app mode:
```bash
google-chrome-stable --app=http://127.0.0.1:18989/
# Or:
chromium --app=http://127.0.0.1:18989/
```

Click **Connect Device** and select your keyboard from the WebHID permission prompt.

## System Integration (systemd User Service)

Included in `system/`:
- `mchose-web.service`: Background user service for `serve.py`.
- `mchose-hub.desktop`: Desktop launcher entry for application menus.
- `mchose-hub`: Wrapper script to set device permissions and launch Chrome in app mode.

To install:
```bash
mkdir -p ~/.config/systemd/user ~/.local/bin ~/.local/share/applications
cp system/mchose-web.service ~/.config/systemd/user/
cp system/mchose-hub ~/.local/bin/
cp system/mchose-hub.desktop ~/.local/share/applications/

systemctl --user daemon-reload
systemctl --user enable --now mchose-web.service
```
