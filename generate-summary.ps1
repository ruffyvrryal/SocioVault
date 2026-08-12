# SocialVault Pro - Project Summary DOCX Generator
# Generates a proper .docx (Office Open XML) file using only PowerShell + .NET
# No Node.js, no CDN, no external dependencies needed

Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

$outputPath = "C:\Users\AXIOO\Pictures\SocialVault_Pro_Project_Summary.docx"
$generatedAt = Get-Date -Format "MMMM dd, yyyy 'at' HH:mm"

# ─── Helper: XML-safe string ─────────────────────────────────────────
function xs([string]$s) { 
    $s.Replace('&','&amp;').Replace('<','&lt;').Replace('>','&gt;').Replace('"','&quot;').Replace("'",'&apos;') 
}

# ─── Style helpers ───────────────────────────────────────────────────
function Para([string]$text, [string]$style = "Normal", [bool]$bold = $false, [string]$color = "000000", [int]$size = 22) {
    $b = if ($bold) { "<w:b/><w:bCs/>" } else { "" }
    return @"
<w:p>
  <w:pPr><w:pStyle w:val="$style"/><w:spacing w:after="120"/></w:pPr>
  <w:r><w:rPr>$b<w:color w:val="$color"/><w:sz w:val="$size"/><w:szCs w:val="$size"/></w:rPr>
  <w:t xml:space="preserve">$(xs $text)</w:t></w:r>
</w:p>
"@
}

function Heading1([string]$text) {
    return @"
<w:p>
  <w:pPr><w:pStyle w:val="Heading1"/><w:spacing w:before="360" w:after="180"/><w:jc w:val="center"/></w:pPr>
  <w:r><w:rPr><w:b/><w:bCs/><w:color w:val="1E293B"/><w:sz w:val="56"/><w:szCs w:val="56"/></w:rPr>
  <w:t>$(xs $text)</w:t></w:r>
</w:p>
"@
}

function Heading2([string]$text) {
    return @"
<w:p>
  <w:pPr><w:spacing w:before="400" w:after="160"/><w:pBdr><w:bottom w:val="single" w:sz="6" w:space="4" w:color="6366F1"/></w:pBdr></w:pPr>
  <w:r><w:rPr><w:b/><w:bCs/><w:color w:val="3730A3"/><w:sz w:val="36"/><w:szCs w:val="36"/></w:rPr>
  <w:t>$(xs $text)</w:t></w:r>
</w:p>
"@
}

function Heading3([string]$text) {
    return @"
<w:p>
  <w:pPr><w:spacing w:before="280" w:after="100"/></w:pPr>
  <w:r><w:rPr><w:b/><w:bCs/><w:color w:val="1D4ED8"/><w:sz w:val="26"/><w:szCs w:val="26"/></w:rPr>
  <w:t>$(xs $text)</w:t></w:r>
</w:p>
"@
}

function Bullet([string]$text, [string]$color = "374151") {
    return @"
<w:p>
  <w:pPr><w:ind w:left="360" w:hanging="240"/><w:spacing w:after="80"/></w:pPr>
  <w:r><w:rPr><w:color w:val="10B981"/><w:sz w:val="22"/><w:szCs w:val="22"/></w:rPr><w:t xml:space="preserve">• </w:t></w:r>
  <w:r><w:rPr><w:color w:val="$color"/><w:sz w:val="22"/><w:szCs w:val="22"/></w:rPr><w:t>$(xs $text)</w:t></w:r>
</w:p>
"@
}

function KV([string]$key, [string]$value) {
    return @"
<w:p>
  <w:pPr><w:spacing w:after="80"/></w:pPr>
  <w:r><w:rPr><w:b/><w:bCs/><w:color w:val="2B6CB0"/><w:sz w:val="22"/><w:szCs w:val="22"/></w:rPr><w:t xml:space="preserve">$(xs $key): </w:t></w:r>
  <w:r><w:rPr><w:color w:val="111827"/><w:sz w:val="22"/><w:szCs w:val="22"/></w:rPr><w:t>$(xs $value)</w:t></w:r>
</w:p>
"@
}

function Spacer() { return '<w:p><w:pPr><w:spacing w:after="200"/></w:pPr></w:p>' }

function TRow([string[]]$cells, [bool]$header = $false) {
    $fillColor = if ($header) { "1E293B" } else { "FFFFFF" }
    $textColor = if ($header) { "F1F5F9" } else { "1E293B" }
    $boldTag   = if ($header) { "<w:b/><w:bCs/>" } else { "" }
    $cellWidth = [math]::Floor(9000 / $cells.Count)
    $cellsXml = ($cells | ForEach-Object {
        @"
<w:tc>
  <w:tcPr>
    <w:tcW w:w="$cellWidth" w:type="dxa"/>
    <w:shd w:val="clear" w:color="auto" w:fill="$fillColor"/>
    <w:tcBorders>
      <w:top w:val="single" w:sz="4" w:color="CBD5E1"/>
      <w:left w:val="single" w:sz="4" w:color="CBD5E1"/>
      <w:bottom w:val="single" w:sz="4" w:color="CBD5E1"/>
      <w:right w:val="single" w:sz="4" w:color="CBD5E1"/>
    </w:tcBorders>
    <w:tcMar><w:top w:w="80" w:type="dxa"/><w:left w:w="80" w:type="dxa"/><w:bottom w:w="80" w:type="dxa"/><w:right w:w="80" w:type="dxa"/></w:tcMar>
  </w:tcPr>
  <w:p><w:r><w:rPr>$boldTag<w:color w:val="$textColor"/><w:sz w:val="18"/><w:szCs w:val="18"/></w:rPr><w:t>$(xs $_)</w:t></w:r></w:p>
</w:tc>
"@
    }) -join ""
    return "<w:tr>$cellsXml</w:tr>"
}

function Table([string]$header_row_xml, [string]$body_rows_xml) {
    return @"
<w:tbl>
  <w:tblPr>
    <w:tblW w:w="9000" w:type="dxa"/>
    <w:tblBorders>
      <w:insideH w:val="single" w:sz="4" w:color="E2E8F0"/>
      <w:insideV w:val="single" w:sz="4" w:color="E2E8F0"/>
    </w:tblBorders>
    <w:tblCellMar><w:top w:w="60" w:type="dxa"/><w:left w:w="80" w:type="dxa"/><w:bottom w:w="60" w:type="dxa"/><w:right w:w="80" w:type="dxa"/></w:tblCellMar>
  </w:tblPr>
  $header_row_xml
  $body_rows_xml
</w:tbl>
"@
}

# ─── Build document XML ──────────────────────────────────────────────
$body = @"
$(Heading1 "SocialVault Pro")
$(Para "Social Media Account Vault · Content Analytics Platform" "Normal" $true "6366F1" 28)
$(Para "Project Summary · Goals · Implemented Features · Future Roadmap" "Normal" $false "64748B" 24)
$(Para "Document generated: $generatedAt" "Normal" $false "94A3B8" 20)
$(Spacer)

$(Heading2 "1. Project Overview")
$(Para "SocialVault Pro is a browser-based, multi-user social media management and analytics platform designed for content creators, social media managers, and digital marketing teams. It provides a unified workspace to track content performance, analyze growth trends, and collaborate across multiple social media accounts — all without any paid third-party analytics subscription." "Normal" $false "374151")
$(Spacer)
$(Para "The platform runs entirely in the browser as a Single-Page Application (SPA) with zero backend infrastructure costs — making it completely free for personal and small-team use. All data is stored in the browser's localStorage, meaning no server, database, or hosting is needed." "Normal" $false "4B5563")
$(Spacer)
$(KV "Project Name" "SocialVault Pro")
$(KV "Project Type" "Browser-based Social Media Analytics SPA")
$(KV "Target Users" "Content creators, social media managers, marketing teams")
$(KV "Core Philosophy" "Free, zero-backend, offline-capable, multi-account analytics")
$(KV "Started" "August 2026")
$(KV "Project Directory" "C:\Users\AXIOO\Pictures\Sociavault")
$(KV "Local Dev URL" "http://localhost:5173/")
$(Spacer)

$(Heading2 "2. Project Goals")
$(Heading3 "2.1 Primary Goals")
$(Bullet "Provide a single platform to manage multiple social media accounts without switching between native apps")
$(Bullet "Track content performance metrics: impressions, reach, engagement, ER% with structured data tables")
$(Bullet "Deliver rich analytics with interactive all-time, monthly, and weekly line growth charts")
$(Bullet "Analyze hashtag performance to identify which tags drive the most reach and engagement")
$(Bullet "Understand which featured subjects/persons perform best across all content")
$(Bullet "Enable secure multi-user vault sharing with role-based permissions: Owner / Editor / Viewer")
$(Bullet "Ensure responsive layout optimized for both desktop and mobile screens")
$(Spacer)
$(Heading3 "2.2 Design Goals")
$(Bullet "Premium dark-mode glassmorphism aesthetic with vibrant neon accents")
$(Bullet "Smooth micro-animations and interactive hover effects throughout the UI")
$(Bullet "No backend dependency — zero hosting costs, everything in the browser's localStorage")
$(Bullet "Modular multi-page routing so each feature has its own dedicated view")
$(Spacer)

$(Heading2 "3. Technology Stack")
$(Table `
    (TRow @("Layer", "Technology", "Purpose") $true) `
    (@(
        (TRow @("UI Framework", "React 18 (CDN, UMD)", "Component-based SPA rendering")),
        (TRow @("Transpilation", "Babel Standalone (CDN)", "JSX -> JS in-browser compilation")),
        (TRow @("Charts", "Chart.js 4.4 (CDN)", "Interactive line growth diagrams")),
        (TRow @("Icons", "Lucide Icons (CDN)", "SVG icon system throughout UI")),
        (TRow @("DOCX Export", "docx.js 8.5 (CDN)", "Browser-side .docx report generation")),
        (TRow @("Styling", "Vanilla CSS + CSS Variables", "Glassmorphism dark design system")),
        (TRow @("Data Persistence", "Browser localStorage", "Zero-backend data storage")),
        (TRow @("Typography", "Google Fonts: Inter + Outfit", "Premium web typography")),
        (TRow @("Dev Server", "PowerShell HttpListener (server.ps1)", "Local static server on port 5173"))
    ) -join "")
)
$(Spacer)

$(Heading2 "4. Implemented Features")

$(Heading3 "4.1 Authentication & User System")
$(Bullet "Google Sign-In simulation with email and display name based sessions")
$(Bullet "Quick demo login for Owner, Editor, and Viewer roles for easy testing")
$(Bullet "Custom email/name form sign-in for any user identity")
$(Bullet "Session persistence via localStorage — stays logged in after page refresh")
$(Bullet "Per-user isolated vault access — users only see vaults they own or are invited to")
$(Spacer)

$(Heading3 "4.2 Account Vault Hub")
$(Bullet "Create unlimited social media account workspaces, each with its own isolated vault")
$(Bullet "Vault cards show platform list, content count, total impressions, and user role badge")
$(Bullet "Switch between vaults instantly via navbar dropdown")
$(Bullet "Delete vaults (owner only) with cascade deletion of all associated content")
$(Spacer)

$(Heading3 "4.3 Account Center")
$(Bullet "Displays all connected platform channels for the active account")
$(Bullet "Summary stats: Total Audience, Total Content Items, Total Impressions")
$(Bullet "Add platform channels: Instagram, YouTube, TikTok, X (Twitter), LinkedIn, Threads")
$(Bullet "Remove platform channels with owner or editor permission")
$(Spacer)

$(Heading3 "4.4 Content Log Table")
$(Bullet "Full CRUD: Add, Edit, Delete content entries")
$(Bullet "Fields: Upload Date, Platform, Caption, Hashtag chips, Multi-person Subject chips")
$(Bullet "Metrics per row: Impressions, Reach, Likes, Comments, Shares, Saves")
$(Bullet "Auto-calculated Engagement Rate (ER%) per row")
$(Bullet "Status pills: Uploaded, Scheduled, Privated, Deleted")
$(Bullet "Search filter by caption, hashtag, or subject name")
$(Bullet "Platform and status filter dropdowns")
$(Bullet "Pagination: 10 content items per page with Previous/Next/Page number controls")
$(Spacer)

$(Heading3 "4.5 Add Content Page")
$(Bullet "Dedicated form page for logging new content entries")
$(Bullet "Multi-subject tagging: add multiple featured people per content entry")
$(Bullet "Hashtag input: space or comma-separated, auto-prefixed with #")
$(Bullet "All numeric metric fields with form validation")
$(Bullet "Status selector with four options")
$(Spacer)

$(Heading3 "4.6 Timeframe Analytics (Line Growth Diagrams)")
$(Bullet "Three timeframe modes: All-Time, Monthly (12-month line), Weekly (4-week line)")
$(Bullet "Summary stat cards: Total Impressions, Reach, Engagement, ER%")
$(Bullet "Monthly: Chart.js line chart across Jan-Dec for the selected year")
$(Bullet "Weekly: Chart.js line chart for Week 1-4 of the selected month and year")
$(Bullet "Three data series on all charts: Impressions, Reach, Total Engagement")
$(Bullet "Month and Year selector dropdowns for monthly/weekly modes")
$(Bullet "#1 Top Performing Post highlight card at bottom showing best post by impressions")
$(Bullet "Export DOCX Analytics Report button (All-Time / Monthly / Weekly)")
$(Spacer)

$(Heading3 "4.7 Hashtag Studio Analytics")
$(Bullet "Aggregates all hashtags across all content for the active account")
$(Bullet "Per-hashtag metrics: Post count, Total Impressions, Total Reach, Engagement, Avg ER%")
$(Bullet "Clean sortable data table view")
$(Spacer)

$(Heading3 "4.8 Subject Performance Studio")
$(Bullet "Tracks performance metrics per featured person across all content entries")
$(Bullet "Cards view and table view per subject showing all key metrics")
$(Bullet "Per-subject metrics: Contents Featured, Total Impressions, Reach, Engagement, ER%")
$(Bullet "Shows Top Performing Post caption per subject in the table")
$(Bullet "Multi-attribute sorting: Impressions, Alphabet (A-Z/Z-A), Contents Featured, Reach, Engagement, ER%")
$(Bullet "Sort direction toggle: High to Low or Low to High")
$(Bullet "Search filter by subject name")
$(Bullet "Pagination: 25 subjects per page with Previous/Next/Page controls")
$(Spacer)

$(Heading3 "4.9 DOCX Analytics Report Export")
$(Bullet "Export button on the Timeframe Analytics page")
$(Bullet "Choose export scope: All-Time, Monthly, or Weekly")
$(Bullet "Report includes: Summary Metrics, Top Post, Content Log Table, Hashtag Table, Subject Table")
$(Bullet "Auto-named files with account name and timeframe embedded")
$(Bullet "100% browser-side using docx.js — no server or API required")
$(Spacer)

$(Heading3 "4.10 Vault Sharing & Collaboration")
$(Bullet "Generate a shareable vault link with a unique token per vault")
$(Bullet "Invite collaborators by email with Editor or Viewer role assignment")
$(Bullet "Owner can remove collaborators at any time")
$(Bullet "Role enforcement across all pages: Owner (full), Editor (add/edit/delete), Viewer (read-only)")
$(Bullet "Role badge displayed in navbar and on vault selection dropdown")
$(Spacer)

$(Heading2 "5. App Architecture")

$(Heading3 "5.1 File Structure")
$(Table `
    (TRow @("File", "Purpose") $true) `
    (@(
        (TRow @("index.html", "HTML entry point loading all CDN scripts and stylesheet")),
        (TRow @("src/styles.css", "Complete design system: CSS variables, glassmorphism, animations, responsive layout")),
        (TRow @("src/bundle.js", "All React components, contexts, utility functions, pages in a single Babel file")),
        (TRow @("server.ps1", "PowerShell static HTTP server (HttpListener) on localhost:5173")),
        (TRow @("project-summary-generator.html", "Standalone DOCX project summary generator page"))
    ) -join "")
)
$(Spacer)

$(Heading3 "5.2 React Component & Context Architecture")
$(Bullet "AuthContext — manages current user session, login state, logout")
$(Bullet "VaultContext — accounts, contents, active account, active page, permissions")
$(Bullet "LoginPage — Google sign-in UI and email-based demo auth")
$(Bullet "AccountVaultPage — vault hub with multi-account vault cards")
$(Bullet "Navbar — top navigation with account switcher, page tabs, user avatar/logout")
$(Bullet "AccountCenterPage — platform channel management dashboard")
$(Bullet "AddContentPage — content creation form with all metric fields")
$(Bullet "ContentTablePage — filtered, paginated content data table with CRUD")
$(Bullet "TimeframeAnalyticsPage — line charts, stat cards, top post box, DOCX export")
$(Bullet "HashtagAnalyticsPage — hashtag aggregation and performance table")
$(Bullet "SubjectAnalyticsPage — subject cards + table + sort options + pagination")
$(Bullet "CollaboratorsPage — invite/remove collaborators and share vault link")
$(Bullet "generateDocxReport() — async utility for browser-side DOCX generation")
$(Spacer)

$(Heading3 "5.3 Data Persistence (localStorage Keys)")
$(Bullet "smh_user — current logged-in user object (uid, displayName, email, photoURL)")
$(Bullet "smh_accounts — all account vaults with platforms, collaborators, shareToken")
$(Bullet "smh_active_account — ID string of the currently selected active vault")
$(Bullet "smh_contents — all content log entries across all vaults")
$(Spacer)

$(Heading2 "6. Future Roadmap & Planned Features")

$(Heading3 "Authentication & Security")
$(Bullet "Real Firebase / Supabase Google OAuth for true multi-device sync")
$(Bullet "Server-side session tokens for production-grade security")
$(Bullet "Vault password protection for extra-sensitive accounts")
$(Spacer)

$(Heading3 "Analytics Enhancements")
$(Bullet "Platform breakdown pie chart — performance share per platform")
$(Bullet "Best posting time heatmap — day-of-week x hour engagement matrix")
$(Bullet "Trending vs declining content detection with automatic alerts")
$(Bullet "Side-by-side platform comparison mode")
$(Bullet "Audience/follower growth tracking over time")
$(Spacer)

$(Heading3 "Content Management Improvements")
$(Bullet "Thumbnail/media upload — attach preview image to each content entry")
$(Bullet "Content scheduling calendar — calendar view for scheduled posts")
$(Bullet "Bulk CSV import — import a spreadsheet of content data at once")
$(Bullet "Content duplicate/clone — quickly copy an entry as a template")
$(Spacer)

$(Heading3 "Export & Reporting")
$(Bullet "CSV export for content table data")
$(Bullet "PDF export as alternative to DOCX")
$(Bullet "Scheduled weekly/monthly email reports (requires backend)")
$(Bullet "Custom branded report templates with logo upload")
$(Spacer)

$(Heading3 "Collaboration & Sharing")
$(Bullet "In-app notifications when collaborators make changes")
$(Bullet "Activity log / audit trail per vault")
$(Bullet "Public read-only analytics shareable page (no login needed)")
$(Bullet "Comment threads on individual content entries")
$(Spacer)

$(Heading3 "Platform Integrations")
$(Bullet "Instagram Basic Display API — auto-import post metrics")
$(Bullet "YouTube Data API — sync video analytics automatically")
$(Bullet "TikTok API integration when publicly available")
$(Bullet "Google Analytics / UTM tracking integration")
$(Spacer)

$(Heading2 "7. Development Timeline")
$(Table `
    (TRow @("Phase", "Feature Delivered", "Status") $true) `
    (@(
        (TRow @("Phase 1", "Project setup, design system, login page", "Complete")),
        (TRow @("Phase 1", "Account Vault Hub multi-account management", "Complete")),
        (TRow @("Phase 1", "Account Center + platform channel management", "Complete")),
        (TRow @("Phase 2", "Add Content form + Content Table with CRUD", "Complete")),
        (TRow @("Phase 2", "Status pills, hashtag chips, multi-subject tagging", "Complete")),
        (TRow @("Phase 2", "Content Table pagination (10 per page)", "Complete")),
        (TRow @("Phase 3", "Timeframe Analytics: All-Time, Monthly, Weekly modes", "Complete")),
        (TRow @("Phase 3", "Monthly & Weekly interactive line growth charts (Chart.js)", "Complete")),
        (TRow @("Phase 3", "#1 Top Performing Post highlight card", "Complete")),
        (TRow @("Phase 4", "Hashtag Studio analytics aggregation table", "Complete")),
        (TRow @("Phase 4", "Subject Performance Studio: 6-option sorting + 25/page pagination", "Complete")),
        (TRow @("Phase 5", "Vault sharing link + Collaborators with role enforcement", "Complete")),
        (TRow @("Phase 6", "DOCX Analytics Report Export (All-Time / Monthly / Weekly)", "Complete")),
        (TRow @("Phase 6", "DOCX Project Summary Generator", "Complete")),
        (TRow @("Phase 7+", "Backend, API integrations, PWA, PDF export, real OAuth...", "Planned"))
    ) -join "")
)
$(Spacer)

<w:p>
  <w:pPr><w:jc w:val="center"/><w:spacing w:before="400"/><w:pBdr><w:top w:val="single" w:sz="4" w:color="E2E8F0" w:space="4"/></w:pBdr></w:pPr>
  <w:r><w:rPr><w:i/><w:color w:val="94A3B8"/><w:sz w:val="18"/><w:szCs w:val="18"/></w:rPr>
  <w:t>SocialVault Pro — Project Summary Document — Generated $generatedAt — http://localhost:5173/</w:t></w:r>
</w:p>
"@

# ─── Build document.xml ──────────────────────────────────────────────
$documentXml = @"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:wpc="http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas"
  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"
  xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:wp14="http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing"
  xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing"
  xmlns:w10="urn:schemas-microsoft-com:office:word"
  xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"
  xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml"
  xmlns:wpg="http://schemas.microsoft.com/office/word/2010/wordprocessingGroup"
  xmlns:wpi="http://schemas.microsoft.com/office/word/2010/wordprocessingInk"
  xmlns:wne="http://schemas.microsoft.com/office/word/2006/wordml"
  xmlns:wps="http://schemas.microsoft.com/office/word/2010/wordprocessingShape"
  mc:Ignorable="w14 wp14">
<w:body>
$body
<w:sectPr>
  <w:pgSz w:w="12240" w:h="15840"/>
  <w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440" w:header="720" w:footer="720" w:gutter="0"/>
</w:sectPr>
</w:body>
</w:document>
"@

# ─── Relationships XML ───────────────────────────────────────────────
$relsXml = @'
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>
'@

# ─── Styles XML ─────────────────────────────────────────────────────
$stylesXml = @'
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:docDefaults>
    <w:rPrDefault>
      <w:rPr>
        <w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:cs="Calibri"/>
        <w:sz w:val="22"/>
        <w:szCs w:val="22"/>
        <w:lang w:val="en-US"/>
      </w:rPr>
    </w:rPrDefault>
  </w:docDefaults>
  <w:style w:type="paragraph" w:styleId="Normal">
    <w:name w:val="Normal"/>
  </w:style>
  <w:style w:type="paragraph" w:styleId="Heading1">
    <w:name w:val="heading 1"/>
    <w:basedOn w:val="Normal"/>
    <w:next w:val="Normal"/>
    <w:pPr>
      <w:jc w:val="center"/>
      <w:spacing w:before="480" w:after="240"/>
    </w:pPr>
    <w:rPr>
      <w:b/><w:bCs/>
      <w:color w:val="1E293B"/>
      <w:sz w:val="56"/>
      <w:szCs w:val="56"/>
    </w:rPr>
  </w:style>
</w:styles>
'@

# ─── Content Types XML ───────────────────────────────────────────────
$contentTypesXml = @'
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
</Types>
'@

# ─── Root _rels XML ──────────────────────────────────────────────────
$rootRelsXml = @'
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>
'@

# ─── Create .docx (ZIP) ──────────────────────────────────────────────
Write-Host "Building SocialVault Pro Project Summary DOCX..." -ForegroundColor Cyan

# Remove existing file if present
if (Test-Path $outputPath) { Remove-Item $outputPath -Force }

$tempDir = Join-Path $env:TEMP "sociavault_docx_$(Get-Random)"
New-Item -ItemType Directory -Path "$tempDir\word\_rels" -Force | Out-Null
New-Item -ItemType Directory -Path "$tempDir\_rels" -Force | Out-Null

# Write all XML files
[System.IO.File]::WriteAllText("$tempDir\[Content_Types].xml", $contentTypesXml, [System.Text.Encoding]::UTF8)
[System.IO.File]::WriteAllText("$tempDir\_rels\.rels", $rootRelsXml, [System.Text.Encoding]::UTF8)
[System.IO.File]::WriteAllText("$tempDir\word\document.xml", $documentXml, [System.Text.Encoding]::UTF8)
[System.IO.File]::WriteAllText("$tempDir\word\_rels\document.xml.rels", $relsXml, [System.Text.Encoding]::UTF8)
[System.IO.File]::WriteAllText("$tempDir\word\styles.xml", $stylesXml, [System.Text.Encoding]::UTF8)

# Compress to .docx
[System.IO.Compression.ZipFile]::CreateFromDirectory($tempDir, $outputPath)

# Cleanup temp
Remove-Item $tempDir -Recurse -Force

Write-Host ""
Write-Host "SUCCESS! DOCX created at:" -ForegroundColor Green
Write-Host "  $outputPath" -ForegroundColor Yellow
Write-Host ""
Write-Host "Open it with Microsoft Word or any compatible Word processor." -ForegroundColor Cyan
