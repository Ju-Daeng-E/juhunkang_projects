import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Formula Student Korea 2024",
      role: "Telemetry System Team Leader",
      period: "2023-2024",
      org: "Team AFA, Ajou University",
      description: "Led a team of 2 members, designed system architecture and built the entire telemetry system. Achieved <15ms end-to-end latency from sensors to dashboard.",
      highlights: [
        "Designed architecture & built hardware, firmware, backend",
        "Integrated Solace PubSub+ message broker for reliable data transmission",
        "Real-time monitoring: speed, temperature, voltage, GPS",
        "Collaborated with frontend teammate for web dashboard"
      ],
      tech: ["STM32", "ESP32", "Raspberry Pi", "CAN", "MQTT", "Solace"],
      color: "#FF2800",
      details: {
        overview: "Real-time telemetry system for electric race car. Collects data from BMS, motor controller, and sensors through CAN bus, transmits via MQTT to cloud broker, displays on web dashboard.",
        myRole: [
          "Team Leader - led 2 team members",
          "Designed entire system architecture (v1.0 → v2.0)",
          "Built hardware setup, firmware, backend server",
          "Collaborated with frontend teammate for dashboard UI"
        ],
        architecture: "/images/fsk-architecture.png",
        photos: [
          "/images/fsk-photo1.png",
          "/images/fsk-photo2.png",
          "/images/fsk-photo3.png"
        ],
        results: [
          "< 15ms end-to-end latency",
          "Stable data transmission during track testing",
          "Real-time GPS tracking and sensor monitoring"
        ],
        github: "https://github.com/Ju-Daeng-E"
      }
    },
    {
      id: 2,
      title: "BMW RC Car Integration",
      role: "Solo Developer",
      period: "Aug 2025",
      org: "Hannover Maker Fair",
      description: "Self-initiated project. Found unused BMW gear lever in lab and built complete RC car control system. Reverse engineered CAN protocol using brute-force method.",
      highlights: [
        "Brute-forced CAN bitrate, IDs, and packet data without documentation",
        "Decoded gear position (P/R/N/D) and light control signals",
        "Real-time video streaming with <30ms latency",
        "Demonstrated at international maker fair"
      ],
      tech: ["CAN Bus", "Raspberry Pi", "Python", "REST API"],
      color: "#0066B1",
      details: {
        overview: "Self-initiated project to integrate real BMW F-Series gear lever into RC car control system. Reverse engineered CAN protocol without any documentation using brute-force testing.",
        myRole: [
          "100% Solo Development",
          "Found unused gear lever in lab, planned entire project",
          "Brute-forced CAN protocol (bitrate, IDs, packet format)",
          "Built vehicle control system and live dashboard"
        ],
        architecture: "/images/bmw-architecture.png",
        photos: [
          "/images/bmw-photo1.png",
          "/images/bmw-photo2.png",
          "/images/bmw-photo3.png"
        ],
        results: [
          "Decoded BMW CAN protocol without documentation",
          "< 30ms video streaming latency",
          "Successfully demonstrated at Hannover Maker Fair"
        ],
        github: "https://github.com/Ju-Daeng-E"
      }
    },
    {
      id: 3,
      title: "Head Unit & Instrument Cluster",
      role: "System Developer",
      period: "Dec 2025",
      org: "VW SEA:ME Program",
      description: "Built complete Yocto-based automotive cockpit system. Responsible for entire system - custom Yocto layers, Bluetooth connectivity, and Qt applications.",
      highlights: [
        "Custom Yocto layers: meta-app, meta-env, meta-piracer",
        "BlueZ Bluetooth integration with A2DP audio streaming",
        "D-Bus IPC between Qt6 applications",
        "Dual display output via Wayland compositor"
      ],
      tech: ["Yocto", "Qt6", "D-Bus", "BlueZ", "Wayland", "CAN"],
      color: "#00D4AA",
      details: {
        overview: "Yocto-based automotive cockpit system with Head Unit and Instrument Cluster. Custom Linux distribution with Bluetooth audio streaming, D-Bus IPC, and Qt6 applications.",
        myRole: [
          "Responsible for entire system development",
          "Built custom Yocto layers (meta-app, meta-env, meta-piracer)",
          "Implemented BlueZ Bluetooth with A2DP/AVRCP",
          "Developed Qt6 QML applications with D-Bus communication"
        ],
        architecture: "/images/headunit-architecture.png",
        photos: [
          "/images/headunit-photo1.png",
          "/images/headunit-photo2.png",
          "/images/headunit-photo3.png"
        ],
        results: [
          "Complete automotive cockpit system",
          "Bluetooth A2DP music streaming working",
          "Dual display with synchronized data via D-Bus"
        ],
        github: "https://github.com/Ju-Daeng-E"
      }
    },
    {
      id: 4,
      title: "Eclipse SDV Hackathon",
      role: "Team Leader - A-kiki",
      period: "2025",
      org: "Eclipse Foundation",
      description: "Led team to build autonomous police vehicle pursuit system using CARLA simulator. Placed 6th and qualified for final presentations.",
      highlights: [
        "LiDAR-based collision detection system",
        "Multi-vehicle coordination architecture",
        "ROS2 & Zenoh messaging integration",
        "Handled system architecture, Git management, presentations"
      ],
      tech: ["CARLA", "ROS2", "Zenoh", "Ankaios", "Python"],
      color: "#7B3FE4",
      details: {
        overview: "Autonomous police vehicle pursuit system built for Eclipse SDV Hackathon using CARLA simulator. Multi-vehicle coordination with LiDAR collision detection.",
        myRole: [
          "Team Leader - led 4 team members",
          "Designed system architecture",
          "Managed Git repository and integration",
          "Created and delivered final presentation"
        ],
        architecture: "/images/hackathon-architecture.png",
        photos: [
          "/images/hackathon-photo1.png",
          "/images/hackathon-photo2.png"
        ],
        results: [
          "6th place finish",
          "Qualified for final presentations",
          "Working multi-vehicle pursuit system"
        ],
        github: "https://github.com/Ju-Daeng-E"
      }
    }
  ];

  const skills = {
    "Embedded": ["STM32", "ESP32", "Raspberry Pi", "Arduino", "Yocto Linux"],
    "Protocols": ["CAN Bus", "UART", "I2C", "SPI", "MQTT", "D-Bus"],
    "Programming": ["C/C++", "Python", "JavaScript", "SQL"],
    "Automotive": ["BlueZ", "Wayland", "Qt6", "Solace PubSub+"],
    "Tools": ["Git", "Docker", "ROS2", "CARLA"]
  };

  const timeline = [
    { year: "2020", event: "Started B.S. Software Engineering at Ajou University", type: "education" },
    { year: "2021-22", event: "Military Service - Heavy Vehicle Driver & Maintenance", type: "experience" },
    { year: "2023-24", event: "Formula Student Korea - Telemetry Team Leader", type: "project" },
    { year: "Jul 2025", event: "Joined Volkswagen SEA:ME Program, Wolfsburg", type: "education" },
    { year: "Aug 2025", event: "BMW RC Car at Hannover Maker Fair", type: "project" },
    { year: "Dec 2025", event: "Head Unit Project with Yocto & Bluetooth", type: "project" }
  ];

  const closeModal = () => setSelectedProject(null);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)',
      color: '#ffffff',
      fontFamily: "'Outfit', sans-serif",
      overflowX: 'hidden',
      position: 'relative'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&family=Bebas+Neue&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #FF2800, #FF6B35); border-radius: 4px; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes modalSlide {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .nav-item:hover { color: #FF2800 !important; }
        .project-card:hover { transform: translateY(-8px) scale(1.02); }
        .skill-tag:hover { transform: scale(1.1); background: #FF2800 !important; }
        .timeline-dot:hover { transform: scale(1.5); }
        .view-btn:hover { background: #FF2800 !important; transform: scale(1.05); }
        .close-btn:hover { background: rgba(255,255,255,0.2) !important; }
        .photo-placeholder:hover { border-color: #FF2800 !important; }
        .clickable-image { cursor: zoom-in; transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .clickable-image:hover { transform: scale(1.02); box-shadow: 0 8px 30px rgba(255,40,0,0.3); }
      `}</style>

      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <div 
          onClick={() => setFullscreenImage(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.95)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            animation: 'fadeIn 0.2s ease',
            cursor: 'zoom-out'
          }}
        >
          <button
            onClick={() => setFullscreenImage(null)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: '#fff',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              fontSize: '24px',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
              zIndex: 2001
            }}
          >
            ✕
          </button>
          <img 
            src={fullscreenImage}
            alt="Fullscreen view"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '95vw',
              maxHeight: '95vh',
              objectFit: 'contain',
              borderRadius: '8px',
              animation: 'zoomIn 0.3s ease',
              cursor: 'default'
            }}
          />
        </div>
      )}

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          onClick={closeModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.9)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            animation: 'fadeIn 0.3s ease',
            overflowY: 'auto'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'linear-gradient(135deg, #1a1a2e 0%, #0a0a0a 100%)',
              borderRadius: '16px',
              maxWidth: '1000px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              border: `2px solid ${selectedProject.color}`,
              animation: 'modalSlide 0.3s ease',
              position: 'relative'
            }}
          >
            {/* Modal Header */}
            <div style={{
              padding: '30px 40px',
              borderBottom: '1px solid #333',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              position: 'sticky',
              top: 0,
              background: 'linear-gradient(135deg, #1a1a2e 0%, #151520 100%)',
              zIndex: 10
            }}>
              <div>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '12px',
                  color: selectedProject.color,
                  marginBottom: '8px',
                  letterSpacing: '2px'
                }}>
                  {selectedProject.period} • {selectedProject.org}
                </div>
                <h2 style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '42px',
                  marginBottom: '5px',
                  letterSpacing: '1px'
                }}>
                  {selectedProject.title}
                </h2>
                <div style={{ color: selectedProject.color, fontSize: '16px', fontWeight: '500' }}>
                  {selectedProject.role}
                </div>
              </div>
              <button
                className="close-btn"
                onClick={closeModal}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  color: '#fff',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  fontSize: '20px',
                  cursor: 'pointer',
                  transition: 'background 0.3s ease'
                }}
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div style={{ padding: '40px' }}>
              {/* Overview */}
              <div style={{ marginBottom: '40px' }}>
                <h3 style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '14px',
                  color: '#FF2800',
                  marginBottom: '15px',
                  letterSpacing: '2px'
                }}>
                  {'>'} OVERVIEW
                </h3>
                <p style={{ color: '#aaa', lineHeight: '1.8', fontSize: '16px' }}>
                  {selectedProject.details.overview}
                </p>
              </div>

              {/* My Role */}
              <div style={{ marginBottom: '40px' }}>
                <h3 style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '14px',
                  color: '#FF2800',
                  marginBottom: '15px',
                  letterSpacing: '2px'
                }}>
                  {'>'} MY_ROLE
                </h3>
                <ul style={{ listStyle: 'none' }}>
                  {selectedProject.details.myRole.map((role, i) => (
                    <li key={i} style={{
                      color: '#ccc',
                      fontSize: '15px',
                      marginBottom: '10px',
                      paddingLeft: '20px',
                      position: 'relative'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: selectedProject.color
                      }}>→</span>
                      {role}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architecture */}
              <div style={{ marginBottom: '40px' }}>
                <h3 style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '14px',
                  color: '#FF2800',
                  marginBottom: '15px',
                  letterSpacing: '2px'
                }}>
                  {'>'} ARCHITECTURE
                </h3>
                <div 
                  className="photo-placeholder"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '2px dashed #333',
                    borderRadius: '12px',
                    padding: '20px',
                    textAlign: 'center',
                    transition: 'border-color 0.3s ease'
                  }}
                >
                  <img 
                    src={selectedProject.details.architecture}
                    alt="Architecture Diagram"
                    className="clickable-image"
                    onClick={() => setFullscreenImage(selectedProject.details.architecture)}
                    style={{
                      maxWidth: '100%',
                      borderRadius: '8px',
                      display: 'block'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div style={{ display: 'none', color: '#666', padding: '40px' }}>
                    <div style={{ fontSize: '48px', marginBottom: '15px' }}>📐</div>
                    <div style={{ fontSize: '14px' }}>Architecture Diagram</div>
                    <div style={{ fontSize: '12px', color: '#444', marginTop: '5px' }}>
                      {selectedProject.details.architecture}
                    </div>
                  </div>
                </div>
                <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '12px', color: '#666' }}>
                  Click image to view fullscreen
                </div>
              </div>

              {/* Photos */}
              <div style={{ marginBottom: '40px' }}>
                <h3 style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '14px',
                  color: '#FF2800',
                  marginBottom: '15px',
                  letterSpacing: '2px'
                }}>
                  {'>'} PHOTOS
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '15px'
                }}>
                  {selectedProject.details.photos.map((photo, i) => (
                    <div
                      key={i}
                      className="photo-placeholder"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '2px dashed #333',
                        borderRadius: '12px',
                        aspectRatio: '16/10',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        transition: 'border-color 0.3s ease'
                      }}
                    >
                      <img 
                        src={photo}
                        alt={`Photo ${i + 1}`}
                        className="clickable-image"
                        onClick={() => setFullscreenImage(photo)}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div style={{ 
                        display: 'none', 
                        flexDirection: 'column',
                        alignItems: 'center',
                        color: '#666' 
                      }}>
                        <div style={{ fontSize: '32px', marginBottom: '8px' }}>📷</div>
                        <div style={{ fontSize: '12px' }}>Photo {i + 1}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '12px', color: '#666' }}>
                  Click any image to view fullscreen
                </div>
              </div>

              {/* Results */}
              <div style={{ marginBottom: '40px' }}>
                <h3 style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '14px',
                  color: '#FF2800',
                  marginBottom: '15px',
                  letterSpacing: '2px'
                }}>
                  {'>'} RESULTS
                </h3>
                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                  {selectedProject.details.results.map((result, i) => (
                    <div key={i} style={{
                      padding: '12px 20px',
                      background: `${selectedProject.color}20`,
                      border: `1px solid ${selectedProject.color}50`,
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '14px'
                    }}>
                      ✓ {result}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div style={{ marginBottom: '40px' }}>
                <h3 style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '14px',
                  color: '#FF2800',
                  marginBottom: '15px',
                  letterSpacing: '2px'
                }}>
                  {'>'} TECH_STACK
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {selectedProject.tech.map((tech) => (
                    <span key={tech} style={{
                      padding: '8px 16px',
                      background: 'rgba(255,255,255,0.05)',
                      borderRadius: '6px',
                      fontSize: '13px',
                      color: '#aaa',
                      fontFamily: "'JetBrains Mono', monospace"
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub Link */}
              <div style={{ textAlign: 'center', paddingTop: '20px', borderTop: '1px solid #333' }}>
                <a
                  href={selectedProject.details.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '14px 28px',
                    background: selectedProject.color,
                    color: '#fff',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: '600',
                    fontSize: '14px',
                    letterSpacing: '1px',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  💻 View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: `
            linear-gradient(rgba(255,40,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,40,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
        <div style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,40,0,0.15) 0%, transparent 70%)',
          top: '10%',
          right: '-100px',
          animation: 'float 8s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,102,177,0.15) 0%, transparent 70%)',
          bottom: '20%',
          left: '-50px',
          animation: 'float 10s ease-in-out infinite reverse'
        }} />
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '4px',
          background: 'linear-gradient(90deg, transparent, rgba(255,40,0,0.3), transparent)',
          animation: 'scanline 4s linear infinite',
          opacity: 0.5
        }} />
      </div>

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        background: 'linear-gradient(180deg, rgba(10,10,10,0.95) 0%, transparent 100%)',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '28px',
          letterSpacing: '4px',
          background: 'linear-gradient(90deg, #FF2800, #FF6B35)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          JK
        </div>
        <div style={{ display: 'flex', gap: '40px' }}>
          {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-item" style={{
              color: '#888',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '500',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              transition: 'color 0.3s ease',
              fontFamily: "'JetBrains Mono', monospace"
            }}>
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 80px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center'
        }}>
          <div style={{
            animation: isLoaded ? 'slideIn 1s ease forwards' : 'none',
            opacity: isLoaded ? 1 : 0
          }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '14px',
              color: '#FF2800',
              marginBottom: '20px',
              letterSpacing: '3px'
            }}>
              {'>'} EMBEDDED SOFTWARE ENGINEER
            </div>
            <h1 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '120px',
              lineHeight: '0.9',
              marginBottom: '30px',
              letterSpacing: '-2px'
            }}>
              <span style={{ color: '#fff' }}>JUHUN</span><br />
              <span style={{
                background: 'linear-gradient(90deg, #FF2800, #FF6B35, #FFB800)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>KANG</span>
            </h1>
            <p style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: '#aaa',
              maxWidth: '500px',
              marginBottom: '40px'
            }}>
              Automotive embedded systems engineer in the <span style={{ color: '#FF2800', fontWeight: '600' }}>Volkswagen SEA:ME</span> program. 
              Passionate about CAN protocols, Yocto Linux, and building software-defined vehicles. 
              I love giving life to vehicles through embedded systems.
            </p>
            
            <div style={{ display: 'flex', gap: '20px', marginBottom: '50px' }}>
              <a href="mailto:kjuhun00@gmail.com" style={{
                padding: '16px 32px',
                background: 'linear-gradient(135deg, #FF2800, #FF6B35)',
                color: '#fff',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '14px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                borderRadius: '4px',
                boxShadow: '0 4px 20px rgba(255,40,0,0.3)'
              }}>
                Contact Me
              </a>
              <a href="https://github.com/Ju-Daeng-E" target="_blank" rel="noopener noreferrer" style={{
                padding: '16px 32px',
                background: 'transparent',
                color: '#fff',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '14px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                borderRadius: '4px',
                border: '2px solid #333'
              }}>
                GitHub →
              </a>
            </div>

            <div style={{ display: 'flex', gap: '40px' }}>
              <div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '48px', color: '#FF2800' }}>3</div>
                <div style={{ fontSize: '12px', color: '#666', letterSpacing: '2px', textTransform: 'uppercase' }}>Core Projects</div>
              </div>
              <div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '48px', color: '#FF2800' }}>&lt;15ms</div>
                <div style={{ fontSize: '12px', color: '#666', letterSpacing: '2px', textTransform: 'uppercase' }}>Telemetry Latency</div>
              </div>
              <div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '48px', color: '#FF2800' }}>3.53</div>
                <div style={{ fontSize: '12px', color: '#666', letterSpacing: '2px', textTransform: 'uppercase' }}>GPA / 4.5</div>
              </div>
            </div>
          </div>

          <div style={{
            position: 'relative',
            animation: isLoaded ? 'slideUp 1s ease 0.3s forwards' : 'none',
            opacity: isLoaded ? 1 : 0
          }}>
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '100%',
              height: '100%',
              border: '2px solid #FF2800',
              borderRadius: '8px',
              opacity: 0.3
            }} />
            <div style={{
              background: 'linear-gradient(135deg, #1a1a2e 0%, #0a0a0a 100%)',
              borderRadius: '8px',
              padding: '40px',
              border: '1px solid #222'
            }}>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '13px',
                color: '#666',
                marginBottom: '20px'
              }}>
                // current_status.cpp
              </div>
              <pre style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '14px',
                lineHeight: '1.8',
                color: '#ddd',
                margin: 0
              }}>
{`struct Engineer {
  string name = `}<span style={{ color: '#FF6B35' }}>"Juhun Kang"</span>{`;
  string location = `}<span style={{ color: '#FF6B35' }}>"Wolfsburg, DE"</span>{`;
  string program = `}<span style={{ color: '#FF6B35' }}>"VW SEA:ME"</span>{`;
  
  vector<string> skills = {
    `}<span style={{ color: '#00D4AA' }}>"CAN Bus"</span>{`,
    `}<span style={{ color: '#00D4AA' }}>"Yocto Linux"</span>{`,
    `}<span style={{ color: '#00D4AA' }}>"Bluetooth (BlueZ)"</span>{`,
    `}<span style={{ color: '#00D4AA' }}>"Qt6 / D-Bus"</span>{`
  };
  
  bool `}<span style={{ color: '#7B3FE4' }}>available</span>{` = `}<span style={{ color: '#FF2800' }}>true</span>{`;
  string visa = `}<span style={{ color: '#FF6B35' }}>"Working Holiday"</span>{`;
};`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{
        padding: '120px 80px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '80px'
          }}>
            <div>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '14px',
                color: '#FF2800',
                marginBottom: '15px',
                letterSpacing: '3px'
              }}>
                {'>'} SELECTED_PROJECTS
              </div>
              <h2 style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '80px',
                letterSpacing: '2px'
              }}>
                KEY PROJECTS
              </h2>
            </div>
            <p style={{ color: '#666', maxWidth: '400px', textAlign: 'right' }}>
              Click "VIEW DETAILS" to see architecture diagrams and photos.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '30px'
          }}>
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{
                  background: hoveredProject === project.id 
                    ? `linear-gradient(135deg, ${project.color}15 0%, #0a0a0a 100%)`
                    : 'linear-gradient(135deg, #151520 0%, #0a0a0a 100%)',
                  borderRadius: '12px',
                  padding: '40px',
                  border: `1px solid ${hoveredProject === project.id ? project.color : '#222'}`,
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '4px',
                  height: '100%',
                  background: project.color,
                  opacity: hoveredProject === project.id ? 1 : 0.3
                }} />
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '20px'
                }}>
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '12px',
                    color: project.color,
                    letterSpacing: '2px'
                  }}>
                    {project.period}
                  </div>
                  <div style={{ fontSize: '12px', color: '#666' }}>
                    {project.org}
                  </div>
                </div>
                
                <h3 style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '32px',
                  marginBottom: '8px',
                  letterSpacing: '1px'
                }}>
                  {project.title}
                </h3>
                <div style={{
                  fontSize: '14px',
                  color: project.color,
                  marginBottom: '20px',
                  fontWeight: '500'
                }}>
                  {project.role}
                </div>
                <p style={{
                  color: '#888',
                  lineHeight: '1.7',
                  marginBottom: '25px',
                  fontSize: '15px'
                }}>
                  {project.description}
                </p>
                
                <ul style={{ listStyle: 'none', marginBottom: '25px' }}>
                  {project.highlights.slice(0, 3).map((highlight, i) => (
                    <li key={i} style={{
                      color: '#666',
                      fontSize: '13px',
                      marginBottom: '8px',
                      paddingLeft: '20px',
                      position: 'relative'
                    }}>
                      <span style={{ position: 'absolute', left: 0, color: project.color }}>→</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '20px',
                  paddingTop: '20px',
                  borderTop: '1px solid #222'
                }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {project.tech.slice(0, 4).map((tech) => (
                      <span key={tech} style={{
                        padding: '6px 14px',
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: '4px',
                        fontSize: '12px',
                        color: '#888',
                        fontFamily: "'JetBrains Mono', monospace"
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    className="view-btn"
                    onClick={() => setSelectedProject(project)}
                    style={{
                      padding: '10px 20px',
                      background: project.color,
                      color: '#fff',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      fontFamily: "'JetBrains Mono', monospace"
                    }}
                  >
                    VIEW DETAILS →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{
        padding: '120px 80px',
        position: 'relative',
        zIndex: 1,
        background: 'linear-gradient(180deg, transparent 0%, rgba(255,40,0,0.03) 50%, transparent 100%)'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '14px',
              color: '#FF2800',
              marginBottom: '15px',
              letterSpacing: '3px'
            }}>
              {'>'} TECHNICAL_STACK
            </div>
            <h2 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '80px',
              letterSpacing: '2px'
            }}>
              SKILLS & TOOLS
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '30px'
          }}>
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} style={{
                background: 'linear-gradient(180deg, #151520 0%, #0a0a0a 100%)',
                borderRadius: '12px',
                padding: '30px',
                border: '1px solid #222'
              }}>
                <h3 style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '14px',
                  color: '#FF2800',
                  marginBottom: '25px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase'
                }}>
                  {category}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {items.map((skill) => (
                    <span key={skill} className="skill-tag" style={{
                      padding: '10px 16px',
                      background: 'rgba(255,255,255,0.03)',
                      borderRadius: '6px',
                      fontSize: '14px',
                      color: '#aaa',
                      textAlign: 'center',
                      cursor: 'default',
                      transition: 'all 0.3s ease'
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="experience" style={{
        padding: '120px 80px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '14px',
              color: '#FF2800',
              marginBottom: '15px',
              letterSpacing: '3px'
            }}>
              {'>'} CAREER_PATH
            </div>
            <h2 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '80px',
              letterSpacing: '2px'
            }}>
              JOURNEY
            </h2>
          </div>

          <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '2px',
              height: '100%',
              background: 'linear-gradient(180deg, #FF2800, #FF6B35, #FFB800)',
              opacity: 0.3
            }} />

            {timeline.map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '50px',
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'
              }}>
                <div style={{
                  flex: 1,
                  textAlign: index % 2 === 0 ? 'right' : 'left',
                  padding: index % 2 === 0 ? '0 40px 0 0' : '0 0 0 40px'
                }}>
                  <div style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '24px',
                    color: '#FF2800',
                    marginBottom: '8px'
                  }}>
                    {item.year}
                  </div>
                  <div style={{ color: '#ddd', fontSize: '16px', lineHeight: '1.6' }}>
                    {item.event}
                  </div>
                </div>
                
                <div className="timeline-dot" style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: item.type === 'project' ? '#FF2800' 
                    : item.type === 'education' ? '#0066B1' : '#00D4AA',
                  border: '3px solid #0a0a0a',
                  zIndex: 2,
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease'
                }} />
                
                <div style={{ flex: 1 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why I Love This Section */}
      <section style={{ padding: '80px', position: 'relative', zIndex: 1 }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '50px',
          background: 'linear-gradient(135deg, rgba(255,40,0,0.1) 0%, rgba(0,0,0,0) 100%)',
          borderRadius: '12px',
          border: '1px solid rgba(255,40,0,0.2)',
          textAlign: 'center'
        }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '14px',
            color: '#FF2800',
            marginBottom: '20px',
            letterSpacing: '3px'
          }}>
            {'>'} WHY_I_LOVE_THIS
          </div>
          <p style={{
            color: '#aaa',
            fontSize: '18px',
            lineHeight: '1.9',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            What I enjoyed most was in Formula Student — when everything I built from scratch, 
            without any AI help, successfully connected with real car parts. 
            The moment when the entire system worked end-to-end, from sensors to dashboard — 
            that feeling was amazing. <span style={{ color: '#FF2800', fontWeight: '600' }}>It felt like I was giving life to the vehicle.</span> That's why I love this field.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: '120px 80px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '14px',
            color: '#FF2800',
            marginBottom: '15px',
            letterSpacing: '3px'
          }}>
            {'>'} LET'S_CONNECT
          </div>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '80px',
            marginBottom: '30px',
            letterSpacing: '2px'
          }}>
            GET IN TOUCH
          </h2>
          <p style={{
            color: '#888',
            fontSize: '18px',
            lineHeight: '1.8',
            marginBottom: '50px',
            maxWidth: '600px',
            margin: '0 auto 50px'
          }}>
            Looking for embedded software engineering opportunities in Germany's automotive industry. 
            Available immediately with Working Holiday Visa (valid until June 2026).
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            flexWrap: 'wrap'
          }}>
            {[
              { icon: '✉', label: 'Email', value: 'kjuhun00@gmail.com', href: 'mailto:kjuhun00@gmail.com' },
              { icon: '📱', label: 'Phone', value: '+49 157 5793 7994', href: 'tel:+4915757937994' },
              { icon: '📍', label: 'Location', value: 'Wolfsburg, DE', href: '#' },
              { icon: '💻', label: 'GitHub', value: 'Ju-Daeng-E', href: 'https://github.com/Ju-Daeng-E' }
            ].map((contact) => (
              <a key={contact.label} href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '25px 35px',
                  background: 'linear-gradient(135deg, #151520 0%, #0a0a0a 100%)',
                  borderRadius: '12px',
                  border: '1px solid #222',
                  minWidth: '150px'
                }}>
                <span style={{ fontSize: '24px' }}>{contact.icon}</span>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '11px',
                  color: '#666',
                  letterSpacing: '2px',
                  textTransform: 'uppercase'
                }}>{contact.label}</span>
                <span style={{ fontSize: '14px', color: '#aaa' }}>{contact.value}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '40px 80px',
        borderTop: '1px solid #222',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '24px',
          letterSpacing: '4px',
          background: 'linear-gradient(90deg, #FF2800, #FF6B35)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          JUHUN KANG
        </div>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '12px',
          color: '#666'
        }}>
          © 2025 // Built with passion for automotive innovation
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;