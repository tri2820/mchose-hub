import http.server
import socketserver
import os
import urllib.parse

PORT = 18989
ROOT = os.path.dirname(os.path.abspath(__file__))

class CORSRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, HEAD')
        self.send_header('Access-Control-Allow-Headers', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def translate_path(self, path):
        # Strip query parameters and anchors
        path = urllib.parse.urlparse(path).path
        
        # Handle duplicate /configCenter/configCenter/ paths
        if path.startswith('/configCenter/configCenter/'):
            path = path.replace('/configCenter/configCenter/', '/configCenter/', 1)
        
        # Default to root directory
        rel_path = path.lstrip('/')
        full_path = os.path.join(ROOT, rel_path)
        
        # If it's a directory and has index.html, return index.html
        if os.path.isdir(full_path):
            idx = os.path.join(full_path, 'index.html')
            if os.path.exists(idx):
                return idx

        # Fallback for missing static images
        if path.startswith('/configCenter/static/images/') and not os.path.exists(full_path):
            fallback_img = os.path.join(ROOT, 'configCenter/static/images/1x1.png')
            if os.path.exists(fallback_img):
                return fallback_img

        # Fallback for any missing json configs
        if path.endswith('.json') and not os.path.exists(full_path):
            fallback_json = os.path.join(ROOT, 'configCenter/empty.json')
            if os.path.exists(fallback_json):
                return fallback_json
                
        return full_path

if __name__ == '__main__':
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(('127.0.0.1', PORT), CORSRequestHandler) as httpd:
        httpd.serve_forever()
